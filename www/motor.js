        var a= 0;
        function teste(mouse)
        {
            var blocodenotas = document.getElementById("blocoNotas");
            var q = blocodenotas.getContext("2d");
            var linha = false;
            var desenhar = false;
            var tam = 4;
            q.beginPath();
            document.getElementById("sus").textContent = mouse;

            //-------------------------------------- mouse --------------------------------------//

            blocodenotas.onmousedown = function deu(mouse)
            {
                q.moveTo(mouse.clientX,mouse.clientY);
            document.getElementById("sus").textContent = mouse;
                linha = true;
            }
            blocodenotas.onmouseup = function parou()
            {
                linha = false;
            }
            blocodenotas.onmouseleave = function parou()
            {
                linha = false;
            }
            blocodenotas.onmousemove = function queijo(mouse)
            {   
                a++;
                if (linha == true)
                {                   
                    q.lineTo(mouse.clientX,mouse.clientY);
                    document.getElementById("sus").textContent = mouse+" movendo"+" "+a;
                    q.stroke();
                    q.lineWidth = tam;
                }
            }
            
            //-------------------------------------- Touch --------------------------------------//
            
            blocodenotas.ontouchstart = function mobiledeu(touch)
            {
                q.moveTo(touch.clientX,touch.clientY);
            document.getElementById("sus").textContent = touch;
                linha = true;
            }
            blocodenotas.ontouchend = function mobileparou()
            { 
             document.getElementById("sus").textContent = touch+" parou";
            }
            blocodenotas.ontouchcancel
            {
             document.getElementById("sus").textContent = touch+" parou";
            }
            blocodenotas.ontouchmove = function mobilequeijo(touch)
            {            
                a++;
                q.lineTo(touch.clientX,touch.clientY);
                document.getElementById("sus").textContent = touch+" movendo"+" "+a;
                q.stroke();
                q.lineWidth = tam;
            }
            
        }
    function update()
    {
            var altura = document.getElementById("altura").value;
            var largura = document.getElementById("largura").value;
            var blocodenotas = document.getElementById("blocoNotas");
            blocodenotas.setAttribute("width", largura);
            blocodenotas.setAttribute("height", altura);
    }