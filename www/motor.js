        function teste()
        {
            var blocodenotas = document.getElementById("blocoNotas");
            var q = blocodenotas.getContext("2d");
            var stick = false;
            blocodenotas.ontouchstart = function deu(mouse)
            {
                q.moveTo(mouse.clientX,mouse.clientY);
                stick = true;
            }
            blocodenotas.ontouchend = function parou()
            {
                stick = false;
            }
            blocodenotas.ontouchmove = function queijo(mouse)
            {
                if (stick == true)
                {
                    q.lineTo(mouse.clientX,mouse.clientY);
                    q.stroke();
                }
            }
            
            blocodenotas.onmousedown = function deu(mouse)
            {
                q.moveTo(mouse.clientX,mouse.clientY);
                stick = true;
            }
            blocodenotas.onmouseup = function parou()
            {
                stick = false;
            }
            blocodenotas.onmousemove = function queijo(mouse)
            {
                if (stick == true)
                {
                    q.lineTo(mouse.clientX,mouse.clientY);
                    q.stroke();
                }
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