import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
    
    return (
    <div classNameName="app">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title> | Carpede</title>
        <meta name="title" content="title" />
        <meta name="author" content="author" />
        <meta name="description" content="description" />
        <meta name="keywords" content="keywords" />
        <meta name="robots" content="all" />

        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.position" content="geoLatitude;geoLongitude" />
        <meta name="ICBM" content="geoLatitude, geoLongitude" />

        <meta name="language" content="pt-br" />
        <meta name="copyright" content="nomeEmpresa." />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="url" content="canonical" />
        <meta name="classNameification" content="ramo" />
        <meta name="category" content="ramo" />
        <meta name="Page-Topic" content="title - nomeEmpresa" />
        <meta name="rating" content="general" />
        <meta name="fone" content="tel" />
        <meta name="city" content="cidade" />
        <meta name="country" content="Brasil" />
        <meta property="publisher" content="creditos" />

        <link rel="canonical" href="canonical" />
        <meta name="googlebot" content="all" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="geo.region" content="cidade" />
        <meta name="name" content="nomeEmpresa" />
        <meta name="image" content="url.$card" />

        <meta name="twitter:card" content="url.$card" />
        <meta name="twitter:url" content="canonical" />
        <meta name="twitter:site" content="canonical" />
        <meta name="twitter:title" content="title - nomeEmpresa" />
        <meta name="twitter:description" content="description" />
        <meta name="twitter:image" content="url.$card" />

        <meta property="og:title" content="title - nomeEmpresa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="canonical" />
        <meta property="og:site_name" content="nomeEmpresa" />
        <meta property="og:author" content="nomeEmpresa" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:region" content="Brasil" />
        <meta property="og:image" content="card" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <meta property="og:description" content="description" />
        
        <link rel="icon" href="source/images/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="source/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="public/css/style.css" />
      </Head>
      <div className="fluid-container start">
        <Header />
        <section className="container exclusive">
            <div>
                <h1>Tenha um aplicativo Exclusivo para o Seu Negócio!</h1>
                <div className="subscribe">
                    <input type="text" placeholder="DIGITE AQUI SEU MELHOR EMAIL" />
                    <button>Quero saber mais</button>
                </div>
            </div>
        </section>
    </div>
    <section className="container benefits">
        <div className="mobileImage">
          <img src="/images/device-mobile.png" />
        </div>
        <article className="benefitsArticle">
            <h2>QUAIS VANTAGENS TEREI AO CONTRATAR ?</h2>
            <p className="item">Nenhuma taxa por venda feita</p>
            <p className="item">Sem tempo mínimo de adesão</p>
            <p className="item">Sem burocracia ou multa por cancelamento</p>
            <p className="item">Suporte personalizado</p>
            <img className="pricing" src="/images/pricing.svg" />
        </article>
    </section>
    <section className="container why">
        <div className="reasons">
            <h2>Por que ter um aplicativo delivery?</h2>
            <div className="reason">
                <h4>Exclusividade</h4>
                <p>Ter um aplicativo próprio possui diversas vantagens, as quais uma delas é não ter concorrência como em outros aplicativos públicos de delivery, onde sua empresa deve concorrer com vários opções de lojas.</p>
            </div>
            <div className="reason">
                <h4>Atendimento</h4>
                <p>Mais agilidade no seu atendimento, pois serão listados todos os seus produtos e promoções que ficarão disponíveis para o seu cliente enquanto você só ficará responsável por acompanhar os seus pedidos pendentes.</p>
            </div>
            <div className="reason">
                <h4>ECONOMIA</h4>
                <p>Sem taxas abusivas, que tomam praticamente a maior parte do lucro das suas vendas. Acreditamos no potencial de crescimento de cada parceiro, tentando proporcionar a melhor experiência tanto para você quantos para seus clientes.</p>
            </div>
            <div className="reason">
                <h4>Organização</h4>
                <p>Tenha controle de todos os pedidos feitos por seus cliente, a Carpede possui uma interface organizada com informações diversas sobre cada pedido, podendo entrar em contato diretamente com seu cliente e saber onde ele está.</p>
            </div>
            <div className="know">
                <button>eu quero saber mais</button>
            </div>
        </div>
    </section>
    <div className="fluid-container about">
        <a><h3>MELHOR ATENDIMENTO AO CLIENTE</h3></a>
        <a><h3>SEM COMPLICAÇÃO</h3></a>
        <a><h3>SEM concorrência</h3></a>
    </div>
    <footer>
        <p>Copyright @ 2020 - Todos os Direitos Reservados - Carpede</p>
    </footer>

    </div>
  )
}
