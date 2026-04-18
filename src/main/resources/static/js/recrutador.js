const lista       = document.getElementById('lista-curriculos');
const btnBuscar   = document.getElementById('btn-buscar');
const btnLogout   = document.getElementById('btn-logout');
const inputNome   = document.getElementById('search-nome');
const selectArea  = document.getElementById('filter-area');
const selectNivel = document.getElementById('filter-nivel');

const token = localStorage.getItem('jwt');
if (!token) {
    window.location.href = 'login.html';
}

function renderEmpty() {
    lista.innerHTML = '<p class="empty">Nenhum currículo encontrado.</p>';
}

function renderCurriculos(curriculos) {
    if (curriculos.length === 0) { renderEmpty(); return; }
    lista.innerHTML = curriculos.map(c => `
        <div class="card">
            <h3>${c.nomeCompleto}</h3>
            <p class="meta">${c.area} · ${c.nivel} · ${c.email} · ${c.telefone}</p>
            <p>${c.resumo}</p>
        </div>
    `).join('');
}

async function buscar() {
    lista.innerHTML = '<p class="empty">Carregando...</p>';

    const params = new URLSearchParams();
    if (inputNome.value.trim())   params.append('nome',  inputNome.value.trim());
    if (selectArea.value)         params.append('area',  selectArea.value);
    if (selectNivel.value)        params.append('nivel', selectNivel.value);

    try {
        const res = await fetch('/curriculos?' + params.toString(), {
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('jwt');
            window.location.href = 'login.html';
            return;
        }

        const data = await res.json();
        renderCurriculos(data);
    } catch {
        lista.innerHTML = '<p class="empty error">Erro ao carregar currículos.</p>';
    }
}

btnBuscar.addEventListener('click', buscar);

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('jwt');
    window.location.href = 'login.html';
});

buscar();
