export interface DataEbook {
    id?: number;
    title: string;
    description: string;
    genre: string;
    time: string;
    onClick?: () => void;
    cover: string;
    url: string;
}

export const data: DataEbook[] = [
    {
        id: 1,
        title: 'Alice no pais das maravilhas',
        description: 'O livro conta a história de uma menina chamada Alice que cai numa toca de coelho que a transporta para um lugar fantástico povoado por criaturas peculiares e antropomórficas, revelando uma lógica do absurdo, característica dos sonhos. Este está repleto de alusões satíricas dirigidas tanto aos amigos como aos inimigos de Carroll, de paródias a poemas populares infantis ingleses ensinados no século XIX e também de referências linguísticas e matemáticas frequentemente através de enigmas que contribuíram para a sua popularidade. É assim uma obra de difícil interpretação pois contém dois livros num só texto: um para crianças e outro para adultos.',
        genre: 'Ficção',
        time: '296 páginas',
        cover: '../books/covers/alice-in-wonderland.jpg',
        url: 'https://react-reader.metabits.no/files/alice.epub',
    },
    {
        id: 2,
        title: '12 de Dezembro',
        description: 'Meu nome é Callum Ormond. Tenho 16 anos e sou um fugitivo caçado... Caçado pela polícia e perseguido por bandidos que não hesitariam nem um minuto em acabar com a vida de Cal, ele finalmente está chegando ao desfecho dos 365 dias... Antes, porém, é preciso ir com urgência para a Irlanda atrás de respostas para o Enigma Ormond. Mas como fazer isso tendo meio mundo vigiando seus passos? Depois de tanta ação, fugas, adrenalina e busca por pistas, Cal e seus companheiros estão prestes a desvendar o mistério sobre a morte do pai do adolescente e o segredo que envolve sua família. Será que ele vai mesmo conseguir? Afinal, a situação está cada vez mais complicada e neste momento crítico, quando ele mais precisa dos amigos, até a pessoa em que mais confia parece estar contra ele... Faltam poucos dias... Poucas horas... As 12 badaladas da noite de 31 de dezembro estão soando... O que pode ser tão importante a ponto de mudar a História? Será que Cal vai descobrir? Será que ele vai pôr fim a esta Conspiração?',
        genre: 'Ficção',
        time: '160 páginas',
        cover: '../books/covers/12-dezembro.jpg',
        url: '../books/12 Dezembro - Audrey Carlan.epub',
    },
    {
        id: 3,
        title: 'Os noivos do inverno',
        description: 'Sob a sua echarpe puída e os seus óculos de míope, Ofélia esconde poderes singulares: consegue ler o passado dos objetos e atravessar espelhos. Vive sem sobressaltos na arca de Ânima, quando é prometida em casamento a Thorn, do poderoso clã dos Dragões. A rapariga tem então de deixar a família e seguir o seu noivo até à Citacielle, capital flutuante do Polo. Com que finalidade terá ela sido escolhida? Por que razão tem de dissimular a sua verdadeira identidade? Sem o saber, Ofélia torna-se um peão numa conspiração mortal de proporções inimaginadas.Uma heroína inesquecível, um universo rico e transbordante, uma intriga implacável. Descubra o primeiro livro de uma grande saga fantástica e o talento de uma nova autora com um imaginário absolutamente cativante.',
        genre: 'Fantasia',
        time: '416 páginas',
        cover: '../books/covers/os-noivos-do-inverno.jpg',
        url: '../books/Os noivos do inverno - Christelle Dabos.epub',
    },
    {
        id: 4,
        title: 'Desaparecidos em Luz da Lua',
        description: 'Quando Ophélie é promovida a vice-contista, ela se vê inesperadamente jogada aos holofotes e escrutínio da corte. Seu dom, a habilidade de ler a história secreta dos objetos, é descoberto por todos, e não há maior ameaça aos nefastos habitantes de seu novo lar gélido do que isso.',
        genre: 'Documentário',
        time: '432 páginas',
        cover: '../books/covers/desaparecidos-em-luz-da-lua.jpg',
        url: '../books/Desaparecidos em Luz da Lua - Christelle Dabos.epub',
    },
    {
        id: 5,
        title: 'A Memória de babel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        genre: 'Documentário',
        time: '400 páginas',
        cover: '../books/covers/a-memória-de-babel.jpg',
        url: '../books/A Memória de Babel - Christelle Dabos.epub',
    },
    
]