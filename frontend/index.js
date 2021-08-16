const productsList = document.querySelector(`#productsList`)
const form = document.querySelector(`#form`)

const API_URL = "http://127.0.0.1:8080/api/products"

function getList() {
  fetch(API_URL).then(response => {
    response.json().then(data => {
      const productsHtml = data.map((product) => `
      <li>
      ${product.name} - ${product.brand} - ${product.price}
      <a href="#" class="deleteButtons" data-id="${product._id}">[excluir]</a>
      </li>
      `).join('')
      productsList.innerHTML = productsHtml

      const deleteButtons = document.querySelectorAll(".deleteButtons")
      deleteButtons.forEach(buttons => {
        buttons.onclick = function(e) {
          e.preventDefault()
          
          const id = this.dataset.id
          
          fetch(`${API_URL}/${id}`, {
            method: "DELETE"
          }).then(response => {
            response.json().then(data => {
              if(data.message === "Success") {
                getList()
                alert("Produto excluido com sucesso!")
              } else {
                alert("Ocorreu um erro. Tente novamente!")
              }
            })
          })
        }
      })
    })
  })
}

getList()

  form.onsubmit = function(e) {
    e.preventDefault()
    
    const name = document.forms['form'].name.value
    const brand = document.forms['form'].brand.value
    const price = document.forms['form'].price.value
    
    fetch(API_URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        brand,
        price,
      })
    }).then(response => {
    response.json().then(data => {
      if(data.message === "Success"){
        form.reset()
        getList()
        alert("Cadastro concluído com sucesso!")
      } else {
        alert("Opa, ocorreu um erro. Tente novamente!")
      }
    })
  })
}