 const produtos = [
    { 
    nome: "Nintendo Switch", 
    preco: "R$ 1499,90", 
    descricao: "Console híbrido para jogar na TV ou no modo portátil.",
    imagem: "Imagens Produtos/Nintendo Switch.webp",
    categoria: "Nintendo"
     },

    { 
    nome: "Playstation 5", 
    preco: "R$ 3399,90", 
    descricao: "Gráficos de última geração e carregamento ultrarrápido.",
    imagem: "Imagens Produtos/Playstation5.jpg",
    categoria: "Sony"
     },

    { 
    nome: "Xbox Series X", 
    preco: "R$ 3999,90", 
    descricao: "O console mais potente da Microsoft com alta taxa de quadros.",
    imagem: "Imagens Produtos/Xbox Series X.webp",
    categoria: "Microsoft",
    },

    { 
     nome: "Xbox Series S", 
    preco: "R$ 2499,90", 
    descricao: "Console de ultima geração com otimo custo benefício e desempenho sólido.",
    imagem: "Imagens Produtos/Xbox Series S.jpg",
    categoria: "Microsoft"
    },

    { 
    nome: "Playstation 4", 
    preco: "R$ 1099,90", 
    descricao: "Grande biblioteca de exclusivos consagrados e diversão garantida.",
    imagem:"Imagens Produtos/Playstation 4.webp",
    categoria: "Sony"
    },

    { 
    nome: "Nintendo Switch 2", 
    preco: "R$ 3499,90", 
     descricao: "A nova geração do console portátil da Nintendo.",
    imagem: "Imagens Produtos/Nintendo Switch 2.jpg",
    categoria: "Nintendo"
    },

    { 
    nome: "Nintendo 3DS", 
    preco: "R$ 599,90", 
    descricao: "Portátil com tela 3D sem precisar de óculos.",
    imagem: "Imagens Produtos/3ds.webp",
    categoria: "Nintendo"
    },

    { 
    nome: "Playstation 3", 
    preco: "R$ 799,90", 
    descricao: "Console com uma ótima biblioteca de jogos e exclusivos.",
    imagem: "Imagens Produtos/ps3.png",
    categoria: "Sony"
    },

    { 
    nome: "Xbox 360", 
    preco: "R$ 599,90", 
    descricao: "Console clássico com sensor de movimento e jogos maravilhosos.",
    imagem:"Imagens Produtos/Xbox One.jpg",
    categoria: "Microsoft"
    }
        ];

        const container = document.getElementById("catalogo");
        const inputFiltro = document.getElementById("filtroCategoria");

        function exibirCatalogo(produtosParaExibir) {
            let htmlCards = "";

            if (produtosParaExibir.length === 0) {
                container.innerHTML = `<p id="mensagem">Nenhum produto encontrado.</p>`;
                return;
            }

            produtosParaExibir.forEach(produto => {
                const partes = produto.preco.split(",");
                htmlCards += `
                <div class="card">
                    <div>
                    <img src="${produto.imagem}" alt="${produto.nome}" style="width: 100%; height: auto; border-radius: 4px;">
                    <span class="categoria-tag">${produto.categoria}</span>
                    <h3>${produto.nome}</h3>
                    <p class="descricao">${produto.descricao}</p>
                    </div>
                    <p class="preco">${partes[0]}<small>,${partes[1]}</small></p>
                </div>
                `;
            });

            container.innerHTML = htmlCards;
        }
        
        function filtrarCatalogo() {
            const termoBusca = inputFiltro.value.toLowerCase().trim();

            const produtosFiltrados = produtos.filter(produto => {
                const correspondeCategoria = produto.categoria.toLowerCase().includes(termoBusca);
                const correspondeNome = produto.nome.toLowerCase().includes(termoBusca);
                const correspondeDescricao = produto.descricao.toLowerCase().includes(termoBusca);

                return correspondeCategoria || correspondeNome || correspondeDescricao;
            });

            exibirCatalogo(produtosFiltrados);
        }

        
        exibirCatalogo(produtos);