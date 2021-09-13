
        var agora = new Date() // pega a hora
        window.document.write(`<p>${agora}</p>`)

        function calcular() {
        var txtv = window.document.querySelector('input#escreva') // o mesmo que elementbyID
        var res = window.document.querySelector('div#res') // 
        var vel = Number(txtv.value) // variavel recebe o valor digitado
        
        res.innerHTML = `<p>Você escolheu ${vel}h </p>` 
        
       if(vel <=11) {
            res.innerHTML+=`<p>Bom Dia!</p>`
            res.style.background = 'rgb(151, 233, 253)'
            res.innerHTML+="<img src='dia.PNG'>"
         
        }

        if(vel >=12 && vel <= 17) {
            res.innerHTML+=`<p>Boa Tarde!</p>`
            res.style.background = 'rgb(143, 96, 27)'
            res.innerHTML+="<img src='tarde.PNG'>"
       
        } 

            if (vel >=18 ) {
            res.innerHTML+=`<p>Boa Noite!</p>`
            res.style.background = 'rgb(139, 81, 194)'
            res.innerHTML+="<img src='noite.PNG'>"
            
        }
    }

