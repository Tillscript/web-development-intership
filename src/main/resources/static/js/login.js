const form     = document.getElementById('form-login');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button');
    btn.disabled = true;
    feedback.textContent = '';

    const body = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value
    };

    try {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('jwt', data.token);
            window.location.href = 'recrutador.html';
        } else {
            feedback.textContent = 'Usuário ou senha inválidos.';
            feedback.className = 'error';
        }
    } catch {
        feedback.textContent = 'Erro ao conectar com o servidor.';
        feedback.className = 'error';
    } finally {
        btn.disabled = false;
    }
});
