function validarCadastro() {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (nome && email && senha) {
                // Salva no localque o usuário está cadastrado
                localStorage.setItem("usuarioCadastrado", "true");
                window.location.href = "plan.html";
            } else {
                const modal = new bootstrap.Modal(document.getElementById('modalAviso'));
                modal.show();
            }
        }
        if (window.location.pathname.includes("plan.html") && localStorage.getItem("usuarioCadastrado") !== "true") {
            window.location.href = "index.html"; 

        }
