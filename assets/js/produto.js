let produtos = [
    {
        id: 1,
        titulo: 'Menino do Pijama listrado',
        autor: 'John boyne',
        sinopse: 'Durante a Segunda Guerra Mundial, Bruno, um garoto de oito anos, e sua família saem de Berlim para residir próximo a um campo de concentração, onde seu pai acaba de se tornar comandante. Infeliz e solitário, ele vagueia fora de sua casa e certo dia encontra Shmuel, um menino judeu de sua idade. Embora a cerca de arame farpado do campo os separem, os meninos começam uma amizade proibida.',
        qnt : 10,
        img : '../img/livro o menino de pijama listrado.jpg'
    },
    {
        id: 2,
        titulo: 'O Pequeno Príncipe',
        autor: 'Anroine de Saint-Exupery',
        sinopse:'A Pequena Garota encontra o excêntrico Aviador, que a introduz ao mágico mundo do Pequeno Príncipe. Neste mundo em que tudo é possível, a Garota aprende a redescobrir sua infância.',
        qnt : 21,
        img : '../img/livro-pequeno.jpg'
    },
    {
        id: 3,
        titulo: 'A Menina que Colecionava Borboletas',
        autor: 'Bruna Viveira',
        sinopse : 'A garota do interior que usa batom vermelho e que realizou seus maiores sonhos continua inspirando adolescentes de todo o país. Para ela, as páginas deste livro significam o bater de asas das borboletas que colecionou dentro do peito por algum tempo e que agora, finalmente, pode deixar que voem livres por aí.',
        qnt : 4,
        img : '../img/livro-borboleta.jpg'
    },
    {
        id: 4,
        titulo: 'O Mundo das Vozes',
        autor: 'Carolinha Munhoz',
        sinopse : 'Anos após ter deixado o Reino das vozes que não se calam, Sophie começa a trabalhar como assistente de um famoso empresário de bandas de rock. Enquanto tenta lidar com os desafios de sua nova vida, a jovem não imagina que em breve será chamada de volta para o seu mundo mágico, o único lugar onde já se sentiu acolhida.',
        qnt : 9,
        img : '../img/livro-o-mundo-das-vozes-silenciadas-capa.jpg'
    },
    {
        id: 5,
        titulo: 'Living Secrets',
        autor: 'Madeleine Roux',
        sinopse : 'Perfect for fans of The Hazel Wood, this genre-bending page-turner from New York Times bestselling author Madeleine Roux follows two girls who transport themselves into the world of their favorite book only to encounter the sinister alternate reality that awaits them.',
        qnt : 14,
        img : '../img/livro-secrets.jpg'
    },
    {
        id: 6,
        titulo: 'Paul la Farge',
        autor: 'The Night Ocean',
        sinopse : 'From the award-winning author and New Yorker contributor, a riveting novel about secrets and scandals,  psychiatry and pulp fiction, inspired by the lives of H.P. Lovecraft and his circle.',
        qnt : 0,
        img : '../img/-livro-farol.jpg'
    }
]
function inject(id){
    for (produto in produtos) {
        if (produtos[produto].id == id){
            $('.img-buy').attr('src',`${produtos[produto].img}`)
            $('#nome_produto').text(produtos[produto].titulo)
            $('.titulo-buy').text(produtos[produto].titulo)
            $('.sinopse').text(produtos[produto].sinopse)
            $('.Qunt').text(produtos[produto].qnt)
            if (produtos[produto].qnt  < 1){
                $('.btn-alugue').addClass( "disabled" )
            }
        }
    }
}
