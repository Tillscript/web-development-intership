const form = document.getElementById('form-curriculo');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const data = {
        nomeCompleto: form.nomeCompleto.value.trim(),
        email: form.email.value.trim(),
        telefone: form.telefone.value.trim(),
        area: form.area.value,
        nivel: form.nivel.value,
        resumo: form.resumo.value.trim()
    };

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
        const res = await fetch('/curriculos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.status === 201) {
            feedback.textContent = 'Currículo enviado com sucesso!';
            feedback.className = 'success';
            form.reset();
        } else {
            const err = await res.json();
            const msgs = Object.values(err).join(' ');
            feedback.textContent = 'Erro: ' + msgs;
            feedback.className = 'error';
        }
    } catch {
        feedback.textContent = 'Falha ao conectar com o servidor.';
        feedback.className = 'error';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Enviar Currículo';
    }
});
