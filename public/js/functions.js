//Funcao para mudar as cores dos Botoes
export function activarBtn (testemunhosBtns, activeSlide){
    testemunhosBtns.forEach((btn)=>{
        const btnOrder = btn.getAttribute('data-order');
        if(btnOrder == activeSlide){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
    })
}

//Funcao para mudar os Slides ao clicar no Botao.
export function mudarSlides (testemunhos, activeSlide){
    testemunhos.forEach((testemunho)=>{
        const position = testemunho.getAttribute('data-order');
        if(position==activeSlide){
            testemunho.classList.remove('prev-slide','next-slide');
            testemunho.classList.add('active-slide');
        }else{
            if(activeSlide ==1 && position == 4){
                testemunho.classList.remove('active-slide','next-slide');
                testemunho.classList.add('prev-slide');
            }else{
                if(activeSlide ==4){
                    if(position == 1){
                        testemunho.classList.remove('active-slide','prev-slide');
                        testemunho.classList.add('next-slide');
                    }else{
                        if(position == 3){
                            testemunho.classList.remove('active-slide','next-slide');
                            testemunho.classList.add('prev-slide','order-3Plus');
                        }
                    }
                }else{
                    if(position<activeSlide){
                        testemunho.classList.remove('active-slide','next-slide');
                        testemunho.classList.add('prev-slide');
                    }else{
                        testemunho.classList.remove('active-slide','prev-slide','order-3Plus');
                        testemunho.classList.add('next-slide');
                    }
                }
            }
            
        }
    })
}