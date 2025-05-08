function validateForm() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="genero"]:checked');  

    
    if (nome == "" || email == "" || password == "" || !gender) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; 
    }

    
    alert("Formulário enviado com sucesso!");
    
    
    window.location.href = "../html/principal.html";  

    return true;  
}
