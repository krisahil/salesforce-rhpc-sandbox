import PFElement from 'c/pfelement';

/*!
 * PatternFly Elements: SiteSwitcher 1.0.9
 * @license
 * Copyright 2020 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

class SiteSwitcher extends PFElement {
  static get version() {
    return "1.0.9";
  }

  get html() {
    return `<style>:root{--label--you-are-here:'block'}.site-switcher[class][class][class]{max-width:1136px;max-width:1136px;max-width:var(--pfe-navigation--content-max-width,1136px);margin:0 auto;font-size:.875rem}.site-switcher[class][class][class] .sr-only{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;padding:0;border:0;white-space:nowrap}.site-switcher[class][class][class] h2,.site-switcher[class][class][class] h3{margin:0;padding:0;font:inherit}.site-switcher[class][class][class] a{color:inherit;text-decoration:none}.site-switcher[class][class][class] .site-switcher__list--primary,.site-switcher[class][class][class] .site-switcher__list--secondary{margin:0;padding:0;list-style:none}.site-switcher[class][class][class] .site-switcher__list--primary{margin-bottom:3.42857em;padding-bottom:3.42857em;border-bottom:1px solid #d2d3d5;color:#6a6e73;color:#6a6e73;color:var(--pfe-theme--color--text--muted,#6a6e73)}@media (min-width:650px){.site-switcher[class][class][class] .site-switcher__list--primary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2.28571em}}@media (min-width:1200px){.site-switcher[class][class][class] .site-switcher__list--primary{grid-template-columns:repeat(4,minmax(0,1fr))}}.site-switcher[class][class][class] .site-switcher__list-item>a{display:block}.site-switcher[class][class][class] .site-switcher__list-item>a:focus .site-switcher-item__logo,.site-switcher[class][class][class] .site-switcher__list-item>a:hover .site-switcher-item__logo{box-shadow:0 4px 8px rgba(3,3,3,.12);box-shadow:0 4px 8px rgba(3,3,3,.12);box-shadow:var(--pf-global--BoxShadow--md,0 4px 8px rgba(3,3,3,.12))}.site-switcher[class][class][class] .site-switcher-item__you-are-here{visibility:hidden;text-align:center}.site-switcher[class][class][class] .site-switcher__list-item--are-here .site-switcher-item__you-are-here{visibility:visible}.site-switcher[class][class][class] .site-switcher-item__logo{display:flex;align-items:center;justify-content:center;width:100%;height:6.71429em;margin-bottom:1.14286em;border:1px solid #d2d3d5;border-radius:.21429em}.site-switcher[class][class][class] .site-switcher-item__logo svg{height:2.42857em}.site-switcher[class][class][class] .site-switcher__list-item--rhdc .site-switcher-item__logo svg{height:2.14286em}.site-switcher[class][class][class] .site-switcher__list-item--developers .site-switcher-item__logo svg{height:3.14286em}.site-switcher[class][class][class] .site-switcher__list-item--are-here{--logo-color:#B8BBBE}.site-switcher[class][class][class] .site-switcher__list-item--are-here .site-switcher-item__logo{background:#f5f5f5}.site-switcher[class][class][class] .site-switcher__list-item--are-here svg [fill],.site-switcher[class][class][class] .site-switcher__list-item--are-here svg path{fill:var(--logo-color)}.site-switcher[class][class][class] .site-switcher__list-item--are-here svg .fill-transparent{fill:transparent}@media (min-width:650px){.site-switcher[class][class][class] .site-switcher__list--secondary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2.28571em}}@media (min-width:1200px){.site-switcher[class][class][class] .site-switcher__list--secondary{grid-template-columns:repeat(3,minmax(0,1fr))}}.site-switcher[class][class][class] .site-switcher__secondary-section h2{margin-bottom:1.71429em;font-size:1.14286em;color:#e00;text-transform:uppercase}.site-switcher[class][class][class] .site-switcher__secondary-section h3{margin-bottom:.44444em;font-size:1.28571em;color:#06c}.site-switcher[class][class][class] .site-switcher__secondary-section li,.site-switcher[class][class][class] .site-switcher__secondary-section ul{margin:0;padding:0;list-style:none}.site-switcher[class][class][class] .site-switcher__secondary-section li{margin-bottom:1.71429em}
/*# sourceMappingURL=./site-switcher.min.css.map */
</style><slot></slot>`;
  }
  static get tag() {
    return "site-switcher";
  }

  static get properties() {
    return {
      _lang: {
        title: "Language support",
        type: String,
        default: "en",
        observer: "_langChanged",
      },
      site: {
        title: "Site displaying component",
        type: String,
        values: ["rhdc", "customer-portal", "developers", "connect"],
        observer: "siteChanged",
      },
    };
  }

  static get slots() {
    return {};
  }

  get templateUrl() {
    return "site-switcher.html";
  }

  // The CSS has to go in the light DOM, so commenting this out.
  get styleUrl() {
    return "site-switcher.css";
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Content;
  }

  constructor() {
    super(SiteSwitcher, { type: SiteSwitcher.PfeType });

    // Translated strings
    this.translations = {
      'en': {
        primaryListLabel: 'Quick links: redhat.com, Customer Portal, Red&nbsp;Hat\'s developer site, Red&nbsp;Hat\'s partner site.',
        youAreHere: 'You are here',
        redHatDescription: 'Learn about our open source products, services, and company.',
        portalDescription: 'Get product support and knowledge from the open source experts.',
        developersDescription: 'Read developer tutorials and download Red&nbsp;Hat software for cloud application development.',
        connectDescription: 'Get training, subscriptions, certifications, and more for partners to build, sell, and support customer solutions.',
        productsHeading: 'Products & tools',
        ansibleDescription: 'Learn about and try our IT automation product.',
        ecosystemDescription: 'Find hardware, software, and cloud providers―and download container images―certified to perform with Red&nbsp;Hat technologies.',
        tryBuySell: 'Try, buy, & sell',
        hybridCloudDescription: 'Access technical how-tos, tutorials, and learning paths focused on Red&nbsp;Hat’s hybrid cloud managed services.',
        storeDescription: 'Buy select Red&nbsp;Hat products and services online.',
        marketplaceDescription: 'Try, buy, sell, and manage certified enterprise software for container-based environments.',
        eventsHeadline: 'Events',
        summitTitle: 'Red Hat Summit and AnsibleFest',
        summitDescription: 'Register for and learn about our annual open source IT industry event.',
      },
      'de': {
        primaryListLabel: 'Quick Links: redhat.com, Customer Portal, Developer Website von Red&nbsp;Hat, Partner Website von Red&nbsp;Hat.',
        youAreHere: 'Sie sind hier',
        redHatDescription: 'Alles über unsere Produkte, Services und das Unternehmen.',
        portalDescription: 'Unterstützung und Fachwissen von den Open Source-Experten.',
        developersDescription: 'Red&nbsp;Hat Software für die Entwicklung von Cloud-Anwendungen.',
        connectDescription: 'Hier finden Partner Informationen über Training, Subskriptionen, Zertifizierungen und mehr, um Kundenlösungen entwickeln, verkaufen und unterstützen zu können.',
        productsHeading: 'Produkte und Tools',
        ansibleDescription: 'Einfache IT-Automatisierung für jedermann.',
        ecosystemDescription: 'Hier finden Sie Hardware-, Software- und Cloud-Anbieter - und können Container-Images herunterladen -, die für Red&nbsp;Hat Technologien zertifiziert sind.',
        tryBuySell: 'Testen, kaufen und verkaufen',
        hybridCloudDescription: 'Greifen Sie auf technische Anleitungen, Tutorials und Lernpfade für die Managed Services von Red&nbsp;Hat für die Hybrid Cloud zu.',
        storeDescription: 'Online-Shop für Produkte und Services.',
        marketplaceDescription: 'Testen, kaufen, verkaufen und verwalten Sie zertifizierte Unternehmenssoftware für containerbasierte Umgebungen.',
        eventsHeadline: 'Events',
        summitTitle: 'Red Hat Summit und AnsibleFest',
        summitDescription: 'Informieren Sie sich über unser jährliches Event für Open Source-Technologien.',
      },
      'es': {
        primaryListLabel: 'Enlaces rápidos: Portal de clientes, Red&nbsp;Hat Developer, Red&nbsp;Hat Partner Connect.',
        youAreHere: 'Usted está aquì',
        redHatDescription: 'Todo sobre nuestros productos, servicios y empresa.',
        portalDescription: 'Todo el conocimiento y respaldo ofrecido por los expertos en open&nbsp;source.',
        developersDescription: 'Tutoriales para desarrolladores y software de Red&nbsp;Hat para el desarrollo de aplicaciones en la&nbsp;nube.',
        connectDescription: 'Los partners de Red&nbsp;Hat pueden acceder a capacitaciones, suscripciones, certificaciones y mucho más para crear, vender y brindar soporte a las soluciones de los clientes.',
        productsHeading: 'Productos y herramientas',
        ansibleDescription: 'Una automatización de TI simple para todos.',
        ecosystemDescription: 'Encuentre proveedores de hardware, software y nube, y descargue imágenes de contenedores, certificados para funcionar con las tecnologías de Red&nbsp;Hat.',
        tryBuySell: 'Probar, comprar y vender',
        hybridCloudDescription: 'Acceda a los tutoriales, las instrucciones y las diferentes herramientas de aprendizaje enfocadas en los servicios gestionados de nubre híbrida de Red&nbsp;Hat.',
        storeDescription: 'Tienda online para productos y servicios.',
        marketplaceDescription: 'Experimente, compre, venda y gestione software empresarial certificado para entornos basados en contenedores.',
        eventsHeadline: 'Eventos',
        summitTitle: 'Red Hat Summit y AnsibleFest',
        summitDescription: 'Regístrese para participar del evento anual de Red&nbsp;Hat para la industria de la TI de open source.',
      },
      'fr': {
        primaryListLabel: 'Liens rapides : redhat.com, Portail Client, Site Développeurs de Red&nbsp;Hat, Site des Partenaires de Red&nbsp;Hat.',
        youAreHere: 'Vous êtes ici',
        redHatDescription: 'Découvrez notre entreprise, nos produits et nos services.',
        portalDescription: 'Une assistance et des connaissances délivrées par des experts de l\'Open Source.',
        developersDescription: 'Des tutoriels pour développeurs et des logiciels Red&nbsp;Hat pour le développement d\'application cloud.',
        connectDescription: 'Obtenez des formations, des abonnements, des certifications et davantage encore afin que nos partenaires puissent créer, vendre et apporter des solutions aux clients.',
        productsHeading: 'Produits & Outils',
        ansibleDescription: 'L\'automatisation à la portée de tous.',
        ecosystemDescription: 'Vous y trouverez des fournisseurs de matériel, logiciels et cloud, et vous pourrez téléchargez des images de conteneurs certifiés compatibles aux technologies Red&nbsp;Hat.',
        tryBuySell: 'Testez, Achetez & Vendez',
        hybridCloudDescription: 'Accédez à des démos, tutoriels et parcours de formation axés sur les services gérés de cloud hybride Red&nbsp;Hat.',
        storeDescription: 'Boutique d\'achat de produits et services en ligne.',
        marketplaceDescription: 'Essayez, achetez, vendez et gérez des logiciels d\'entreprise certifiés pour les environnements basés sur des conteneurs.',
        eventsHeadline: 'Événements',
        summitTitle: 'Red Hat Summit et AnsibleFest',
        summitDescription: 'Inscrivez-vous et découvrez notre événement annuel consacré à l\'informatique libre.',
      },
      'it': {
        primaryListLabel: 'Collegamenti rapidi: redhat.com, Customer Portal, sito Red&nbsp;Hat per sviluppatori, sito Red&nbsp;Hat per i partner.',
        youAreHere: 'Ti trovi qui',
        redHatDescription: 'I nostri prodotti, i nostri servizi e la nostra&nbsp;azienda.',
        portalDescription: 'Accesso al supporto offerto dagli esperti dell\'open&nbsp;source.',
        developersDescription: 'Tutorial e software Red&nbsp;Hat per lo sviluppo di applicazioni&nbsp;cloud.',
        connectDescription: 'I partner di Red&nbsp;Hat possono accedere a formazione, sottoscrizioni, certificazioni e molto altro, per creare, vendere e fornire supporto per le soluzioni dei clienti.',
        productsHeading: 'Prodotti e strumenti',
        ansibleDescription: 'L\'automazione alla portata di tutti.',
        ecosystemDescription: 'Trova provider di soluzioni hardware, software e cloud certificate per l\'utilizzo con tecnologie Red&nbsp;Hat e scarica le immagini dei container.',
        tryBuySell: 'Prova, acquista, vendi',
        hybridCloudDescription: 'Accedi a guide tecniche, tutorial e percorsi formativi sui servizi hybrid cloud gestiti di Red&nbsp;Hat.',
        storeDescription: 'Per acquistare online prodotti e servizi.',
        marketplaceDescription: 'Prova, acquista, vendi e gestisci software enterprise certificato per ambienti basati sui container.',
        eventsHeadline: 'Eventi',
        summitTitle: 'Red Hat Summit e AnsibleFest',
        summitDescription: 'Registrati e scopri il nostro evento annuale sulle tecnologie open source pensate per le aziende.',
      },
      'ja': {
        primaryListLabel: 'クイックリンク: redhat.com、カスタマーポータル、Red&nbsp;Hat 開発者サイト、Red&nbsp;Hat パートナーサイト',
        youAreHere: '閲覧中の Web サイト',
        redHatDescription: 'Red&nbsp;Hat の製品、サービス、企業情報について',
        portalDescription: 'オープンソースのエキスパートによるサポートと知識',
        developersDescription: '開発者向けチュートリアルと Red&nbsp;Hat ソフトウェアでクラウド・アプリケーション開発を支援',
        connectDescription: 'パートナー様がお客様のソリューションを構築、販売、サポートできるように、トレーニング、サブスクリプション、認定などを取得してください。',
        productsHeading: '製品＆ツール',
        ansibleDescription: 'シンプルな IT 自動化',
        ecosystemDescription: 'Red&nbsp;Hat のテクノロジーの利用認定があるハードウェア、ソフトウェア、クラウドパートナーを探し出し、コンテナーイメージをダウンロードできます。',
        tryBuySell: 'トライアル、購入＆販売',
        hybridCloudDescription: 'Red&nbsp;Hat のハイブリッドクラウド・マネージドサービスに特化した技術的なハウツー情報、チュートリアルおよびラーニングパスへのアクセス',
        storeDescription: '製品とサービスのオンライン購入 (グローバル/英語)',
        marketplaceDescription: 'コンテナベースの環境向けの認定済みエンタープライズ・ソフトウェアを試用、購入、販売',
        eventsHeadline: 'イベント',
        summitTitle: 'Red Hat Summit および AnsibleFest',
        summitDescription: '年次のオープンソース IT 業界イベントに登録またはその情報を確認します。',
      },
      'ko': {
        primaryListLabel: '빠른 링크:  redhat.com, 고객 포털, Red&nbsp;Hat 개발자 웹사이트, Red&nbsp;Hat 파트너 웹사이트',
        youAreHere: '현재 보고 있는 웹페이지',
        redHatDescription: 'Red&nbsp;Hat 제품, 서비스, 기업 소개',
        portalDescription: '오픈소스 전문가의 지원 및 지식 포털',
        developersDescription: '클라우드 애플리케이션 개발을 위한 개발자 튜토리얼 및 Red&nbsp;Hat 소프트웨어 다운로드',
        connectDescription: '파트너가 고객에게 솔루션을 구축, 판매, 지원할 수 있도록 교육, 서브스크립션, 인증 등을 받으세요.',
        productsHeading: '제품 & 툴',
        ansibleDescription: '간소화된 IT 자동화',
        ecosystemDescription: 'Red&nbsp;Hat 기술 인증을 받은 하드웨어, 소프트웨어, 클라우드 제공업체를 찾아 컨테이너 이미지를 다운로드하세요.',
        tryBuySell: '평가판, 구매 & 판매',
        hybridCloudDescription: 'Red&nbsp;Hat의 하이브리드 클라우드 관리 서비스에 중점을 둔 기술 사용 방법, 튜토리얼 및 교육 경로 액세스',
        storeDescription: '제품 및 서비스 온라인 구매 (글로벌)',
        marketplaceDescription: '컨테이너 기반 환경을 위한 인증된 엔터프라이즈 소프트웨어를 사용해 보고, 구매 및 판매, 그리고 관리를 할 수 있는 서비스',
        eventsHeadline: '이벤트',
        summitTitle: 'Red Hat Summit & AnsibleFest',
        summitDescription: '연간 오픈 소스 IT 업계 이벤트에 등록하거나 해당 정보를 살펴보세요.',
      },
      'pt-br': {
        primaryListLabel: 'Para acesso rápido: redhat.com, Portal do Cliente, Red&nbsp;Hat Developer, Red&nbsp;Hat Partner Connect.',
        youAreHere: 'Você está aqui',
        redHatDescription: 'Tudo sobre nossos produtos, serviços e&nbsp;empresa.',
        portalDescription: 'Receba todo conhecimento e suporte dos experts em tecnologia open source.',
        developersDescription: 'Leia tutoriais para desenvolvedores e baixe o software Red&nbsp;Hat para desenvolvimento de aplicações em nuvem.',
        connectDescription: 'Os parceiros da Red&nbsp;Hat podem acessar treinamentos, subscrições, certificações e muito mais para criar, vender e oferecer suporte a soluções de clientes.',
        productsHeading: 'Produtos e ferramentas',
        ansibleDescription: 'Automação de TI simples para todos.',
        ecosystemDescription: 'Encontre fornecedores de hardware, software e de serviços em nuvem certificados para as tecnologias Red&nbsp;Hat e baixe imagens de container.',
        tryBuySell: 'Experimente, compre, venda',
        hybridCloudDescription: 'Acesse instruções técnicas, tutoriais e cursos de treinamento com foco nos serviços de gerenciamento de nuvem híbrida da Red&nbsp;Hat.',
        storeDescription: 'Loja online para compra de produtos e serviços.',
        marketplaceDescription: 'Experimente, compre, venda e gerencie software corporativo certificado para ambientes baseados em containers.',
        eventsHeadline: 'Eventos',
        summitTitle: 'Red Hat Summit e AnsibleFest',
        summitDescription: 'Registre-se para participar do evento anual da Red&nbsp;Hat para a indústria de TI open source.',
      },
      'zh': {
        primaryListLabel: '快捷连接：redhat.com、客户门户网站、红帽开发人员网站、红帽合作伙伴网站',
        youAreHere: '您正在浏览的网站',
        redHatDescription: '了解我们的开源产品，服务和公司。',
        portalDescription: '开源专家分享知识，提供支持。',
        developersDescription: '查看开发人员教程，下载红帽云应用开发软件。',
        connectDescription: '为合作伙伴提供培训、订阅、认证等，以构建、销售和支持客户解决方案。',
        productsHeading: '产品和工具',
        ansibleDescription: '了解并试用我们的 IT 自动化产品。',
        ecosystemDescription: '查找经Red&nbsp;Hat技术认证的硬件、软件和云提供商，并下载容器映像。',
        tryBuySell: '尝试、购买和销售',
        hybridCloudDescription: '获取红帽混合云托管服务技术指南、教程和学习路径。',
        storeDescription: '在线购买红帽产品和服务。',
        marketplaceDescription: '试用，购买，出售和管理经过认证并且针对基于容器环境的企业软件。',
        eventsHeadline: '事件',
        summitTitle: '红帽全球峰会和 AnsibleFest',
        summitDescription: '注册并了解我们的年度开源IT行业活动。',
      },
    };

    // @note
    // Inline SVGs need a bit of prep, if they are updated be sure to:
    // * Remove unnecessary ID's, it's going in the light DOM, so why risk dupe id's for unnecessary code
    // * Any <style> will need to be updated to use --logo-color, e.g. fill: var(--logo-color, #e00);
    // * Add a class fill-transparent to any piece (like the hat band) that needs to be transparent when it's grayed out
    // * Test with each logo being selected as 'you are here' and make sure it looks the same as the others
    this.logos = {
      redhat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.8 144"><defs><style>.a737459c-e8c7-4afa-8008-f6cfd15ccda2{fill:#e00;}</style></defs><path d="M579.3,92.3c0,11.9,7.2,17.7,20.2,17.7a53.39,53.39,0,0,0,11.9-1.7V94.5a25.27,25.27,0,0,1-7.7,1.2c-5.4,0-7.4-1.7-7.4-6.7V67.8h15.6V53.6H596.3v-18l-17,3.7V53.6H568V67.8h11.2l.1,24.5Zm-53,.3c0-3.7,3.7-5.5,9.3-5.5a38.35,38.35,0,0,1,10.1,1.3v7.2a20.82,20.82,0,0,1-10.6,2.6c-5.5,0-8.8-2.1-8.8-5.6m5.2,17.6a26.69,26.69,0,0,0,15.4-4.3v3.4h16.8V73.6c0-13.6-9.1-21-24.4-21-8.5,0-16.9,2-26,6.1l6.1,12.5c6.5-2.7,12-4.4,16.8-4.4,7,0,10.6,2.7,10.6,8.3v2.7a48.92,48.92,0,0,0-12.6-1.6c-14.3,0-22.9,6-22.9,16.7,0,9.8,7.8,17.3,20.2,17.3m-92.4-.9h18.1V80.4h30.3v28.8h18.1V35.6H487.5V63.9H457.2V35.6H439.1ZM370.2,81.4c0-8,6.3-14.1,14.6-14.1a17.72,17.72,0,0,1,11.8,4.3V91.1a16.62,16.62,0,0,1-11.8,4.5c-8.2-.1-14.6-6.2-14.6-14.2m26.6,27.9h16.8V31.9l-17,3.7V56.5a28.14,28.14,0,0,0-14.2-3.7c-16.2,0-28.9,12.5-28.9,28.5a28.25,28.25,0,0,0,27.9,28.6h.5a25.46,25.46,0,0,0,14.9-4.8ZM319.6,66.5c5.4,0,9.9,3.5,11.7,8.8H308.1a11.56,11.56,0,0,1,11.5-8.8m-28.7,15c0,16.2,13.2,28.8,30.3,28.8,9.4,0,16.2-2.5,23.2-8.4l-11.3-10c-2.6,2.7-6.5,4.2-11.1,4.2a14.37,14.37,0,0,1-13.7-8.8h39.6V83.1c0-17.7-11.9-30.4-28.1-30.4a28.58,28.58,0,0,0-29,28.1,1.48,1.48,0,0,1,.1.7M261.6,51.1c6,0,9.4,3.8,9.4,8.3s-3.4,8.3-9.4,8.3H243.7V51.1Zm-36,58.1h18.1V82.4h13.8l13.9,26.8h20.2L275.4,79.7A22.32,22.32,0,0,0,289.3,59c0-13.2-10.4-23.5-26-23.5H225.6v73.7Z" transform="translate(-0.1)"/><path class="a737459c-e8c7-4afa-8008-f6cfd15ccda2" d="M127.1,83c12.5,0,30.6-2.6,30.6-17.5a19.53,19.53,0,0,0-.3-3.4L150,29.7c-1.7-7.1-3.2-10.4-15.7-16.6C124.6,8.1,103.5,0,97.2,0c-5.9,0-7.6,7.5-14.5,7.5C76,7.5,71.1,1.9,64.8,1.9c-6,0-9.9,4.1-12.9,12.5,0,0-8.4,23.7-9.5,27.2a6.15,6.15,0,0,0-.2,1.9c-.1,9.2,36.2,39.4,84.9,39.5m32.5-11.4c1.7,8.2,1.7,9.1,1.7,10.1,0,14-15.7,21.8-36.4,21.8-46.8,0-87.7-27.4-87.7-45.5a18.35,18.35,0,0,1,1.5-7.3C21.9,51.5.1,54.5.1,73.7.1,105.2,74.7,144,133.7,144c45.3,0,56.7-20.5,56.7-36.7,0-12.7-11-27.1-30.8-35.7" transform="translate(-0.1)"/><path class="fill-transparent" d="M159.6,71.6c1.7,8.2,1.7,9.1,1.7,10.1,0,14-15.7,21.8-36.4,21.8-46.8,0-87.7-27.4-87.7-45.5a18.35,18.35,0,0,1,1.5-7.3l3.7-9.1a6.15,6.15,0,0,0-.2,1.9c0,9.2,36.3,39.4,84.9,39.4,12.5,0,30.6-2.6,30.6-17.5a19.53,19.53,0,0,0-.3-3.4Z" transform="translate(-0.1)"/></svg>',
      customerPortal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 939 160"><defs><style>.aeec171a-0f92-48fa-acac-14c2d0920ea4{fill:var(--logo-color, #e00);}</style></defs><path d="M319.2,7.3h25.6c11.2,0,18.8,6.8,18.8,16.7,0,7.4-4.5,13.1-11.6,15.5l12.6,24.3h-9.4L343.5,40.6H327.6V63.8h-8.5Zm8.4,7.4V33.6h16.5c6.6,0,11-3.8,11-9.4s-4.4-9.4-11-9.4l-16.5-.1Z"/><path d="M388.6,64.5a21.13,21.13,0,0,1-21.5-20.8v-.5c0-11.9,9.1-21.2,20.6-21.2,11.3,0,19.8,9.4,19.8,21.4v2.3H375.1A13.91,13.91,0,0,0,389,57.5a15.69,15.69,0,0,0,10.4-3.6l5.2,5A24.26,24.26,0,0,1,388.6,64.5ZM375.1,39.8h24.4c-1.2-6.3-6-11-12-11C381.2,28.8,376.3,33.3,375.1,39.8Z"/><path d="M446.7,59.9a19.82,19.82,0,0,1-12.6,4.5c-11.6,0-20.7-9.3-20.7-21.2a20.88,20.88,0,0,1,33.3-17.1V7.3l8.1-1.8V63.7h-8Zm-11.4-2.5a15,15,0,0,0,11.4-4.9V33.8A14.9,14.9,0,0,0,435.3,29a13.81,13.81,0,0,0-14,13.5v.6a13.94,13.94,0,0,0,13.5,14.3Z"/><path d="M482,7.3h8.5V31.5h30V7.3H529V63.7h-8.5V39.2h-30V63.8H482Z"/><path d="M536.6,52c0-7.7,6.3-12.5,16.6-12.5a28.41,28.41,0,0,1,11.2,2.3V37.4c0-5.8-3.5-8.7-10-8.7-3.8,0-7.7,1-12.7,3.5l-3-6A38.25,38.25,0,0,1,555.6,22c10.6,0,16.8,5.2,16.8,14.7V63.9h-7.9V60.3a19.63,19.63,0,0,1-12.8,4.3C542.7,64.5,536.6,59.4,536.6,52Zm16.9,6.5a15.58,15.58,0,0,0,10.9-3.9V47.5A21.53,21.53,0,0,0,553.8,45c-5.9,0-9.5,2.7-9.5,6.8S548.1,58.5,553.5,58.5Z"/><path d="M585.3,29.5h-8.7V22.7h8.7V12.2l8-1.9V22.7h12.1v6.8H593.3V51.8c0,4.2,1.7,5.7,6,5.7a17,17,0,0,0,5.9-1v6.8a25.27,25.27,0,0,1-7.7,1.2c-8,0-12.3-3.8-12.3-10.9Z"/><path d="M361.9,131.2l7.6,7.6a31.08,31.08,0,0,1-23.2,10.4c-17,0-30.1-12.7-30.1-29s13.1-29.1,30.1-29.1c9.1,0,18.2,4.1,23.5,10.6l-7.9,7.8a19.8,19.8,0,0,0-15.6-7.7c-10.2,0-18.1,7.9-18.1,18.4a17.82,17.82,0,0,0,17.6,18.2h.8A19.5,19.5,0,0,0,361.9,131.2Z"/><path d="M384.8,130.8c0,5.4,3.5,8.9,8.7,8.9a10,10,0,0,0,8.7-4.2V106.4h11.1v42H402.2V145a17.7,17.7,0,0,1-11.9,4.2c-9.8,0-16.6-6.9-16.6-16.8v-26h11.1Z"/><path d="M423.8,136.1c4.9,3.2,9.2,4.8,13.6,4.8,4.9,0,8.1-1.8,8.1-4.4,0-2.2-1.6-3.4-5.2-4l-8.1-1.2c-8.3-1.3-12.7-5.4-12.7-12.2,0-8.1,6.8-13.3,17.5-13.3a31.6,31.6,0,0,1,17.3,5.2l-5.3,7.1c-4.6-2.7-8.7-4-13-4-4,0-6.6,1.6-6.6,4.1,0,2.3,1.6,3.4,5.7,4l8.1,1.2c8.2,1.2,12.8,5.5,12.8,12,0,7.9-7.8,13.9-18.4,13.9-7.7,0-14.5-2-19.3-5.8Z"/><path d="M466.4,115.7h-8.6v-9.3h8.6V95.7l11.1-2.5v13.2h11.9v9.3H477.5v18.6c0,4,1.5,5.4,5.8,5.4a17,17,0,0,0,5.9-1v9.1a35.75,35.75,0,0,1-8.5,1.3c-9.4,0-14.2-4.3-14.2-12.5l-.1-20.9Z"/><path d="M514.9,105.6c12.6,0,22.4,9.6,22.4,21.9s-9.8,21.8-22.4,21.8-22.4-9.5-22.4-21.8S502.3,105.6,514.9,105.6Zm11.6,21.8c0-6.9-5-12.3-11.6-12.3s-11.6,5.3-11.6,12.3c0,6.8,5,12.2,11.6,12.2S526.5,134.2,526.5,127.4Z"/><path d="M544.1,106.4h11.1v3.1a16.72,16.72,0,0,1,11-4,15,15,0,0,1,12.6,6.3,17.56,17.56,0,0,1,13.9-6.3c9.4,0,16,6.9,16,16.7v26.1H597.6V123.8c0-5.3-3-8.8-7.9-8.8a9.45,9.45,0,0,0-8.1,4.2,15.14,15.14,0,0,1,.2,3v26.1H570.7V123.7c0-5.3-3-8.8-7.9-8.8a9.18,9.18,0,0,0-7.8,3.8v29.5H543.9Z"/><path d="M637.8,149.2c-12.7,0-22.6-9.5-22.6-21.8a21.51,21.51,0,0,1,21.1-21.8h.5c11.9,0,20.8,9.7,20.8,22.6v2.9H626.4a12.13,12.13,0,0,0,11.9,8.8,13.4,13.4,0,0,0,9.3-3.4l7.3,6.6A25.15,25.15,0,0,1,637.8,149.2Zm-11.5-25.9h20.6c-1.4-5-5.4-8.5-10.2-8.5C631.5,114.8,627.6,118.1,626.3,123.3Z"/><path d="M664.4,106.4h11.1V111a13.47,13.47,0,0,1,11.2-5.6,9.12,9.12,0,0,1,4.6,1v9.7a13.65,13.65,0,0,0-5.6-1.1,11.15,11.15,0,0,0-10.2,6.3v27.2H664.4Z"/><path d="M714.2,92h28.3c11.1,0,18.9,7.3,18.9,17.7,0,10.1-8,17.4-18.9,17.4H725.9v21.3H714.2Zm11.7,10v15.4h15.3c5,0,8.4-3,8.4-7.7s-3.3-7.7-8.4-7.7Z"/><path d="M786.3,105.6c12.6,0,22.4,9.6,22.4,21.9s-9.8,21.8-22.4,21.8-22.4-9.5-22.4-21.8S773.7,105.6,786.3,105.6Zm11.6,21.8c0-6.9-5-12.3-11.6-12.3s-11.6,5.3-11.6,12.3c0,6.8,5,12.2,11.6,12.2s11.6-5.4,11.6-12.2Z"/><path d="M815.5,106.4h11.1V111a13.47,13.47,0,0,1,11.2-5.6,9.12,9.12,0,0,1,4.6,1v9.7a13.65,13.65,0,0,0-5.6-1.1,11.15,11.15,0,0,0-10.2,6.3v27.2H815.5Z"/><path d="M854.7,115.7h-8.6v-9.3h8.6V95.7l11.1-2.5v13.2h11.9v9.3h-12v18.6c0,4,1.5,5.4,5.8,5.4a17,17,0,0,0,5.9-1v9.1a35.75,35.75,0,0,1-8.5,1.3c-9.4,0-14.2-4.3-14.2-12.5Z"/><path d="M881.1,136.2c0-8,6.5-12.7,17.3-12.7a35.06,35.06,0,0,1,10.2,1.6v-3c0-4.8-3-7.3-8.9-7.3-3.5,0-7.5,1.1-12.8,3.5l-4-8.1a43.27,43.27,0,0,1,18.7-4.5c11.4,0,17.9,5.6,17.9,15.6v27.2H908.6v-2.9a19.68,19.68,0,0,1-12.2,3.6C887.4,149.2,881.1,143.9,881.1,136.2Zm18.3,5.1a15.56,15.56,0,0,0,9.3-2.7v-6.3a22.25,22.25,0,0,0-8.9-1.5c-5,0-8.1,2-8.1,5.2s3,5.2,7.7,5.3Z"/><path d="M939,148.4H927.9V92L939,89.6Z"/><path data-name="Dividing line" d="M255.5,160a2.26,2.26,0,0,1-2.3-2.3V2.3a2.3,2.3,0,1,1,4.6,0V157.8A2.24,2.24,0,0,1,255.5,160Z"/><g data-name="Hat icon"><path data-name="Red hat" class="aeec171a-0f92-48fa-acac-14c2d0920ea4" d="M128,91c12.6,0,30.9-2.6,30.9-17.6a18.7,18.7,0,0,0-.3-3.4l-7.5-32.6c-1.7-7.2-3.3-10.4-15.9-16.7-9.8-5-31.1-13.3-37.4-13.3-5.9,0-7.6,7.6-14.6,7.6-6.7,0-11.7-5.6-18-5.6-6,0-10,4.1-13,12.6,0,0-8.5,23.9-9.6,27.4a6.45,6.45,0,0,0-.3,2C42.4,60.5,79,91,128,91Zm32.8-11.6c1.7,8.3,1.7,9.1,1.7,10.2,0,14.1-15.9,21.9-36.7,21.9-47.1,0-88.4-27.6-88.4-45.8a18.83,18.83,0,0,1,1.5-7.4C21.9,59.2,0,62.2,0,81.6c0,31.7,75.2,70.8,134.7,70.8,45.6,0,57.1-20.6,57.1-36.9.1-12.8-11-27.4-31-36.1Z"/><path  class="fill-transparent" d="M160.8,79.4c1.7,8.3,1.7,9.1,1.7,10.2,0,14.1-15.9,21.9-36.7,21.9-47.1,0-88.4-27.6-88.4-45.8a18.83,18.83,0,0,1,1.5-7.4l3.7-9.1a6.45,6.45,0,0,0-.3,2C42.3,60.5,78.9,91,128,91c12.6,0,30.9-2.6,30.9-17.6a18.7,18.7,0,0,0-.3-3.4Z"/></g></svg>',
      developers: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 260.7 104.1"><path d="M1 23.4h13.1c5.8 0 9.7 3.5 9.7 8.5 0 3.8-2.3 6.7-5.9 7.9l6.4 12.5h-4.8l-6-11.8H5.3v11.8H1V23.4zm12.7 13.4c3.4 0 5.7-1.9 5.7-4.8s-2.3-4.8-5.7-4.8H5.3v9.6h8.4zM25.5 41.8C25.5 35.7 30.1 31 36 31s10.2 4.7 10.2 11v1.2H29.6c.6 3.5 3.4 6 7.1 6 2.1 0 4-.7 5.3-1.9l2.6 2.6c-2.5 1.9-5 2.8-8.1 2.8-6.2-.1-11-4.8-11-10.9zM42.1 40c-.6-3.2-3.1-5.6-6.1-5.6-3.1 0-5.7 2.3-6.3 5.6h12.4zM49.2 41.8c0-6.1 4.7-10.8 10.7-10.8 2.3 0 4.5.7 6.3 2.1v-9.7l4.1-.8v29.7h-4.1v-2c-1.7 1.5-4 2.4-6.4 2.4-6-.1-10.6-4.8-10.6-10.9zm17 4.7V37c-1.4-1.6-3.5-2.5-5.9-2.5-4 0-7.1 3.1-7.1 7.2s3.1 7.3 7.1 7.3c2.4 0 4.5-.9 5.9-2.5zM84.3 23.4h4.3v12.4H104V23.4h4.3v28.9H104V39.7H88.6v12.6h-4.3V23.4zM112.2 46.3c0-4 3.2-6.4 8.5-6.4 2 0 4 .4 5.7 1.2v-2.2c0-3-1.8-4.5-5.1-4.5-1.9 0-3.9.5-6.5 1.8l-1.5-3.1c3.2-1.5 5.9-2.1 8.6-2.1 5.5 0 8.6 2.7 8.6 7.5v13.9h-4v-1.8c-1.9 1.5-4 2.2-6.5 2.2-4.6-.2-7.8-2.8-7.8-6.5zm8.7 3.3c2.2 0 4-.6 5.6-2V44c-1.6-.9-3.3-1.3-5.4-1.3-3 0-4.9 1.4-4.9 3.5s1.9 3.4 4.7 3.4zM137.3 47.1V34.7h-4.5v-3.5h4.5v-5.4l4.1-1v6.4h6.2v3.5h-6.2v11.4c0 2.1.9 3 3.1 3 1.2 0 2-.1 3-.5v3.5c-1.1.4-2.7.6-3.9.6-4.1-.1-6.3-2-6.3-5.6zM.7 66.7h11.1C20.4 66.7 27 73 27 81.2s-6.6 14.4-15.3 14.4H.7V66.7zm11 23.6c5.1 0 9.1-4 9.1-9.1s-4-9.2-9.1-9.2H6.6v18.2l5.1.1zM29.7 84.9c0-6.2 4.9-11.1 11.1-11.1s10.6 4.9 10.6 11.5v1.5H35.5c.7 2.6 3.1 4.5 6 4.5 1.9 0 3.6-.6 4.7-1.7l3.7 3.4c-2.5 2-5.2 3-8.6 3-6.5 0-11.6-4.9-11.6-11.1zm16.2-2.2c-.6-2.6-2.7-4.3-5.2-4.3s-4.6 1.7-5.2 4.3h10.4zM52.1 74.1h6.1l5.9 14.3L70 74.1h6l-9.2 21.5h-5.5l-9.2-21.5zM76.6 84.9c0-6.2 4.9-11.1 11.1-11.1s10.6 4.9 10.6 11.5v1.5H82.4c.7 2.6 3.1 4.5 6 4.5 1.9 0 3.6-.6 4.7-1.7l3.7 3.4c-2.6 2-5.2 3-8.7 3-6.5 0-11.5-4.9-11.5-11.1zm16.1-2.2c-.6-2.6-2.7-4.3-5.2-4.3s-4.6 1.7-5.2 4.3h10.4zM101.8 66.7l5.7-.9v29.8h-5.7V66.7zM110.8 84.9c0-6.3 5-11.2 11.5-11.2 6.4 0 11.5 4.9 11.5 11.2s-5 11.1-11.5 11.1c-6.4 0-11.5-4.9-11.5-11.1zm17.5 0c0-3.5-2.6-6.3-6-6.3s-5.9 2.8-5.9 6.3 2.6 6.2 5.9 6.2 6-2.7 6-6.2zM137.2 74.1h5.6v1.8c1.7-1.4 3.8-2.1 6.1-2.1 6.1 0 10.9 4.9 10.9 11.1s-4.9 11-11.1 11c-2.1 0-4.2-.6-5.9-1.7v9.8h-5.7l.1-29.9zm17.1 10.8c0-3.5-2.8-6.2-6.3-6.2-2.1 0-3.9.7-5.1 2.1v8.4c1.2 1.3 3.1 2 5.1 2 3.6-.1 6.3-2.8 6.3-6.3zM162.3 84.9c0-6.2 4.9-11.1 11.1-11.1 6.2 0 10.6 4.9 10.6 11.5v1.5h-15.9c.7 2.6 3.1 4.5 6 4.5 1.9 0 3.6-.6 4.7-1.7l3.7 3.4c-2.6 2.1-5.3 3.1-8.7 3.1-6.4-.1-11.5-5-11.5-11.2zm16.2-2.2c-.6-2.6-2.7-4.3-5.2-4.3s-4.6 1.7-5.2 4.3h10.4zM187.5 74.1h5.7v2.4c1.4-1.9 3.3-2.9 5.7-2.9 1.2 0 1.8.2 2.4.5V79c-.8-.4-1.9-.6-2.9-.6-2.2 0-4.1 1.2-5.2 3.2v13.9h-5.7V74.1z"/><path fill="#E00" d="M114.9 13.2c-.3-.2-.9-.6-1.7-.5-.8 0-1.6.4-2 1.1-.1.1-.1.2-.2.3-.5.7-.6 1.5-.4 2.2.1.3.2.6.3.8.1.2.3.4.5.5.1.1.2.1.2.2 0 0 .1.1.2.1.2.1.3.2.5.2.2.1.5.1.8.1.4 0 .7-.1 1.1-.3.3-.2.6-.4.8-.6.1-.1.2-.3.4-.4 1-1.5.4-3-.5-3.7z"/><path fill="#82C299" d="M153.6 56c-1.1.7-2.3 1.3-3.5 1.9-1.2.5-2.4 1-3.7 1.4-1.4.4-2.2 1.8-1.8 3.2.3 1.1 1.4 1.9 2.5 1.9.2 0 .5 0 .7-.1 1.5-.4 3-1 4.4-1.6s2.8-1.4 4.1-2.2c1.2-.8 1.6-2.4.8-3.6-.7-1.3-2.3-1.6-3.5-.9z"/><path fill="#E00" d="M169.3 24.5c.7 0 1.3-.3 1.8-.8 1-1 1-2.6 0-3.6l-6-6c-1-1-2.6-1-3.6 0s-1 2.6 0 3.6l6 6c.5.5 1.1.8 1.8.8zM154.2 10.4c.8 0 1.6-.4 2.1-1.1.8-1.2.5-2.8-.7-3.6C150 1.8 144.2 0 137.8 0S125 1.9 119.6 5.4c-1.2.8-1.5 2.4-.7 3.6s2.4 1.5 3.6.7c4.6-3 9.9-4.6 15.3-4.6s10.2 1.5 15 4.8c.4.3.9.5 1.4.5z"/><path fill="#82C299" d="m196.2 13.8-1.5 1.5c-7.5 7.6-15.1 15.3-22.4 22.7-3.3 3.3-6.6 6.7-9.8 10-1 1-1 2.6 0 3.6.5.5 1.2.7 1.8.7s1.3-.3 1.8-.8c3.3-3.3 6.6-6.7 9.8-10 7.3-7.4 14.9-15.1 22.4-22.7l1.5-1.5c1-1 1-2.6 0-3.6-1-.9-2.6-.9-3.6.1z"/><path fill="#FAAA4F" d="M242.6 6.1C237 2.1 230.4 0 223.4 0c-6.5 0-12.1 1.8-17.7 5.6-1.2.8-1.5 2.4-.7 3.6s2.4 1.5 3.6.7c4.7-3.2 9.4-4.7 14.8-4.7 5.9 0 11.5 1.8 16.2 5.2.5.3 1 .5 1.5.5.8 0 1.6-.4 2.1-1.1.9-1.2.6-2.8-.6-3.7z"/><path fill="#E00" d="M250.9 14.6c-.8-1.2-2.4-1.5-3.6-.7-1.2.8-1.5 2.4-.7 3.6 3.1 4.6 4.8 10 4.8 15.7s-1.6 10.9-4.7 15.5c-.8 1.2-.5 2.8.7 3.6.4.3.9.4 1.4.4.8 0 1.6-.4 2.2-1.1 3.6-5.4 5.5-11.8 5.5-18.4s-1.8-13.1-5.6-18.6z"/><path fill="#4CB6D6" d="M239.1 56.4c-4.6 3.1-10 4.8-15.7 4.8s-10.5-1.5-15-4.3c-1.2-.8-2.8-.4-3.6.8s-.4 2.8.8 3.6c5.3 3.4 11.4 5.1 17.7 5.1 6.6 0 13.1-2 18.6-5.7 1.2-.8 1.5-2.4.7-3.6-.7-1.2-2.3-1.5-3.5-.7zM193.8 42.7c-1-1-2.6-1.1-3.6-.1s-1.1 2.6-.1 3.6l5.7 5.9c.5.5 1.2.8 1.9.8.6 0 1.3-.2 1.8-.7 1-1 1.1-2.6.1-3.6l-5.8-5.9z"/></svg>',
      connect: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960.2 160"><defs><style>.b0cafcc4-018c-42c5-a893-bbafd809b059{fill:#e00;}</style></defs><path d="M320,91.3h28.8c11.3,0,19.3,7.5,19.3,18,0,10.2-8.1,17.7-19.3,17.7H331.9v21.6H320Zm11.8,10.3v15.7h15.6c5.2,0,8.5-3.1,8.5-7.8s-3.4-7.9-8.5-7.9Z" transform="translate(-0.9)"/><path d="M371.2,136.4c0-8.1,6.6-13,17.5-13a36.42,36.42,0,0,1,10.4,1.6v-3c0-4.9-3-7.5-9-7.5-3.6,0-7.6,1.1-13,3.5l-4.1-8.3a44.79,44.79,0,0,1,19-4.6c11.6,0,18.2,5.7,18.2,15.8v27.7H399.1v-3a20.67,20.67,0,0,1-12.4,3.7C377.6,149.5,371.2,144.1,371.2,136.4Zm18.5,5a16,16,0,0,0,9.4-2.7v-6.4a24,24,0,0,0-9-1.6c-5.2,0-8.2,2-8.2,5.3S385,141.4,389.7,141.4Z" transform="translate(-0.9)"/><path d="M418.8,106H430v4.7a13.54,13.54,0,0,1,11.4-5.7,9.66,9.66,0,0,1,4.7,1v9.8a14.85,14.85,0,0,0-5.7-1.1,11.25,11.25,0,0,0-10.3,6.4v27.6H418.9V106Z" transform="translate(-0.9)"/><path d="M458.6,115.4h-8.8V106h8.8V95.1l11.2-2.5V106H482v9.4H469.9v18.9c0,4,1.6,5.5,5.9,5.5a16.09,16.09,0,0,0,6-1V148a36.61,36.61,0,0,1-8.7,1.3c-9.5,0-14.4-4.3-14.4-12.7l-.1-21.2Z" transform="translate(-0.9)"/><path d="M487.6,106h11.2v3.4a18.45,18.45,0,0,1,12-4.2c9.9,0,16.9,7,16.9,17v26.6H516.5V123.9c0-5.4-3.4-8.9-8.9-8.9a10.28,10.28,0,0,0-8.8,4.3v29.6H487.6Z" transform="translate(-0.9)"/><path d="M557.2,149.6c-13,0-23-9.7-23-22.1a21.77,21.77,0,0,1,22-22.1c12.1,0,21.2,9.8,21.2,23v3H545.6a12.31,12.31,0,0,0,12.1,8.9,13.37,13.37,0,0,0,9.4-3.4l7.4,6.7A26.42,26.42,0,0,1,557.2,149.6Zm-11.7-26.4h20.9c-1.4-5.1-5.5-8.6-10.4-8.6C550.8,114.5,546.8,117.9,545.5,123.2Z" transform="translate(-0.9)"/><path d="M584.2,106h11.2v4.7a13.54,13.54,0,0,1,11.4-5.7,9.66,9.66,0,0,1,4.7,1v9.8a14.85,14.85,0,0,0-5.7-1.1,11.25,11.25,0,0,0-10.3,6.4v27.6H584.3V106Z" transform="translate(-0.9)"/><path d="M678.9,131.3l7.8,7.7a31.46,31.46,0,0,1-23.5,10.6c-17.3,0-30.6-12.9-30.6-29.5S646,90.5,663.2,90.5c9.3,0,18.5,4.2,23.9,10.7l-8,8a20,20,0,0,0-15.8-7.8c-10.4,0-18.4,8-18.4,18.7,0,10.5,8,18.5,18.7,18.5A19.73,19.73,0,0,0,678.9,131.3Z" transform="translate(-0.9)"/><path d="M712.2,105.2c12.8,0,22.8,9.8,22.8,22.2s-10,22.1-22.8,22.1-22.8-9.7-22.8-22.1S699.4,105.2,712.2,105.2ZM724,127.4c0-7.1-5.2-12.5-11.8-12.5s-11.8,5.4-11.8,12.5c0,6.9,5.2,12.4,11.8,12.4S724,134.3,724,127.4Z" transform="translate(-0.9)"/><path d="M741.8,106H753v3.4a18.45,18.45,0,0,1,12-4.2c9.9,0,16.9,7,16.9,17v26.6H770.7V123.9c0-5.4-3.4-8.9-8.9-8.9a10.28,10.28,0,0,0-8.8,4.3v29.6H741.8Z" transform="translate(-0.9)"/><path d="M790.5,106h11.2v3.4a18.45,18.45,0,0,1,12-4.2c9.9,0,16.9,7,16.9,17v26.6H819.4V123.9c0-5.4-3.4-8.9-8.9-8.9a10.28,10.28,0,0,0-8.8,4.3v29.6H790.5Z" transform="translate(-0.9)"/><path d="M860.1,149.6c-13,0-23-9.7-23-22.1a21.77,21.77,0,0,1,22-22.1c12.1,0,21.2,9.8,21.2,23v3H848.5a12.31,12.31,0,0,0,12.1,8.9,13.37,13.37,0,0,0,9.4-3.4l7.4,6.7A26.42,26.42,0,0,1,860.1,149.6Zm-11.7-26.4h20.9c-1.4-5.1-5.5-8.6-10.4-8.6C853.7,114.5,849.8,117.9,848.4,123.2Z" transform="translate(-0.9)"/><path d="M918.6,135l6.7,7a23.75,23.75,0,0,1-17.4,7.6,22.15,22.15,0,1,1,0-44.3,24.09,24.09,0,0,1,17.7,7.6l-6.9,7.3c-3.1-3.4-6.6-5.2-10.6-5.2-6.5,0-11.5,5.4-11.5,12.5s5.1,12.3,11.7,12.3A14.25,14.25,0,0,0,918.6,135Z" transform="translate(-0.9)"/><path d="M937.7,115.4H929V106h8.8V95.1L949,92.6V106h12.1v9.4H949v18.9c0,4,1.6,5.5,5.9,5.5a16.09,16.09,0,0,0,6-1V148a36.61,36.61,0,0,1-8.7,1.3c-9.5,0-14.4-4.3-14.4-12.7l-.1-21.2Z" transform="translate(-0.9)"/><path d="M320.1,7.3h25.6c11.2,0,18.8,6.8,18.8,16.7,0,7.4-4.5,13.1-11.6,15.5l12.6,24.3h-9.4L344.4,40.6H328.5V63.8H320Zm8.4,7.4V33.6H345c6.6,0,11-3.8,11-9.4s-4.4-9.4-11-9.4l-16.5-.1Z" transform="translate(-0.9)"/><path d="M389.5,64.5A21.13,21.13,0,0,1,368,43.7v-.5c0-11.9,9.1-21.2,20.6-21.2,11.3,0,19.8,9.4,19.8,21.4v2.3H376a13.91,13.91,0,0,0,13.9,11.8,15.69,15.69,0,0,0,10.4-3.6l5.2,5A24.26,24.26,0,0,1,389.5,64.5ZM376,39.8h24.4c-1.2-6.3-6-11-12-11C382.1,28.8,377.2,33.3,376,39.8Z" transform="translate(-0.9)"/><path d="M447.6,59.9A19.82,19.82,0,0,1,435,64.4c-11.6,0-20.7-9.3-20.7-21.2a20.88,20.88,0,0,1,33.3-17.1V7.3l8.1-1.8V63.7h-8Zm-11.4-2.5a15,15,0,0,0,11.4-4.9V33.8A14.9,14.9,0,0,0,436.2,29a13.81,13.81,0,0,0-14,13.5v.6a13.94,13.94,0,0,0,13.5,14.3Z" transform="translate(-0.9)"/><path d="M482.9,7.3h8.5V31.5h30V7.3h8.5V63.7h-8.5V39.2h-30V63.8h-8.5V7.3Z" transform="translate(-0.9)"/><path d="M537.5,52c0-7.7,6.3-12.5,16.6-12.5a28.41,28.41,0,0,1,11.2,2.3V37.4c0-5.8-3.5-8.7-10-8.7-3.8,0-7.7,1-12.7,3.5l-3-6A38.25,38.25,0,0,1,556.5,22c10.6,0,16.8,5.2,16.8,14.7V63.9h-7.9V60.3a19.63,19.63,0,0,1-12.8,4.3C543.6,64.5,537.5,59.4,537.5,52Zm16.9,6.5a15.58,15.58,0,0,0,10.9-3.9V47.5A21.53,21.53,0,0,0,554.7,45c-5.9,0-9.5,2.7-9.5,6.8S549,58.5,554.4,58.5Z" transform="translate(-0.9)"/><path d="M586.2,29.5h-8.7V22.7h8.7V12.2l8-1.9V22.7h12.1v6.8H594.2V51.8c0,4.2,1.7,5.7,6,5.7a17,17,0,0,0,5.9-1v6.8a25.27,25.27,0,0,1-7.7,1.2c-8,0-12.3-3.8-12.3-10.9Z" transform="translate(-0.9)"/><path data-name="Dividing line" d="M256.4,160a2.26,2.26,0,0,1-2.3-2.3V2.3a2.3,2.3,0,0,1,4.6,0V157.8A2.24,2.24,0,0,1,256.4,160Z" transform="translate(-0.9)"/><g data-name="Hat icon"><path data-name="Red hat" class="b0cafcc4-018c-42c5-a893-bbafd809b059" d="M128.9,91c12.6,0,30.9-2.6,30.9-17.6a18.7,18.7,0,0,0-.3-3.4L152,37.4c-1.7-7.2-3.3-10.4-15.9-16.7-9.8-5-31.1-13.3-37.4-13.3-5.9,0-7.6,7.6-14.6,7.6-6.7,0-11.7-5.6-18-5.6-6,0-10,4.1-13,12.6,0,0-8.5,23.9-9.6,27.4a6.45,6.45,0,0,0-.3,2C43.3,60.5,79.9,91,128.9,91Zm32.8-11.6c1.7,8.3,1.7,9.1,1.7,10.2,0,14.1-15.9,21.9-36.7,21.9-47.1,0-88.4-27.6-88.4-45.8a18.83,18.83,0,0,1,1.5-7.4C22.8,59.2.9,62.2.9,81.6c0,31.7,75.2,70.8,134.7,70.8,45.6,0,57.1-20.6,57.1-36.9.1-12.8-11-27.4-31-36.1Z" transform="translate(-0.9)"/><path class="fill-transparent" d="M161.7,79.4c1.7,8.3,1.7,9.1,1.7,10.2,0,14.1-15.9,21.9-36.7,21.9-47.1,0-88.4-27.6-88.4-45.8a18.83,18.83,0,0,1,1.5-7.4l3.7-9.1a6.45,6.45,0,0,0-.3,2c0,9.3,36.6,39.8,85.7,39.8,12.6,0,30.9-2.6,30.9-17.6a18.7,18.7,0,0,0-.3-3.4Z" transform="translate(-0.9)"/></g></svg>',
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {}

  /**
   * Figures out which site we are on
   */
  renderYouAreHere() {
    /**
     * Utility function to update the UI once we have the site name
     * @param {string} siteName Should be rhdc, customer-portal, developers, or connect
     */
    const render = (siteName) => {
      const $whereWeAre = this.querySelector(`.site-switcher__list-item--${siteName}`);
      if ($whereWeAre && !$whereWeAre.classList.contains('site-switcher__list-item--are-here')) {
        $whereWeAre.classList.add('site-switcher__list-item--are-here');
      }
    };

    // The new, easy way:
    if (this.site) {
      render(this.site);
      return;
    }

    // The workaround for the legacy version:
    // To change "You are here" was a bunch of CSS vars
    // Switching to JS logic based on reading one of these vars and using CSS
    // The key is the var we'll check, the value is the modifier on
    // the class name site-switcher__list-item--MODIFIER
    const youAreHereCustomPropsMapping = {
      '--rhdc--label': 'rhdc',
      '--customer-portal--label': 'customer-portal',
      '--developers--label': 'developers',
      '--connect--label': 'connect',
    };
    const youAreHereCustomProps = Object.keys(youAreHereCustomPropsMapping);

    // In order to get the proper custom property value with inheritance, we have to run this heavy function:
    const siteSwitcherComputedStyles = getComputedStyle(this);

    for (let index = 0; index < youAreHereCustomProps.length; index++) {
      const currentYouAreHereProp = youAreHereCustomProps[index];
      const customPropValue = siteSwitcherComputedStyles.getPropertyValue(currentYouAreHereProp);

      // block is surrounded in single quotes on chrome, not sure if it's the same in all browsers
      if (customPropValue.trim().toLowerCase().indexOf('block') >= 0) {
        // We've found what we need, render it and stop running the for loop
        this.site = youAreHereCustomPropsMapping[currentYouAreHereProp];
        render(youAreHereCustomPropsMapping[currentYouAreHereProp]);
        break;
      }
    }
  }

  /**
   * Add translated strings into site switcher markup and replace lightDom of component
   */
  renderSiteSwitcherHtml() {
    const $styles = this.shadowRoot.querySelector('style');
    if ($styles) {
      // Set a pointer to the styles DOM object for when we clear the light DOM,
      // we'll still have a pointer to it to bring it back.
      this.styles = $styles;
    }

    // Protip, when working on this HTML, add html before the backtick to get syntax highlighting
    // It won't compile, because html isn't set, but it'll get a nicer dev experience
    const contentHtml =
      `<div class="site-switcher" data-analytics-region="site-switcher">
        <h2 id="site-switcher__heading--main-sites" class="sr-only">${this.translations[this.lang].primaryListLabel}</h2>
        <ul class="site-switcher__list site-switcher__list--primary" aria-labelledby="site-switcher__heading--main-sites">
          <li class="site-switcher__list-item site-switcher__list-item--rhdc">
            <a href="https://www.redhat.com/${this.lang}?intcmp=701f20000012k69AAA"
              data-analytics-category="Websites" data-analytics-text="redhat">
              <p class="site-switcher-item__you-are-here">${this.translations[this.lang].youAreHere}</p>
              <div class="site-switcher-item__logo" aria-hidden="true">
                ${this.logos.redhat}
              </div>
              <h3 class="site-switcher-item__name sr-only">Red&nbsp;Hat</h3>
              <p>${this.translations[this.lang].redHatDescription}</p>
            </a>
          </li>
          <li class="site-switcher__list-item site-switcher__list-item--customer-portal">
            <a href="https://access.redhat.com?intcmp=701f20000012k6EAAQ"
              data-analytics-category="Websites" data-analytics-text="access_redhat">
              <p class="site-switcher-item__you-are-here">${this.translations[this.lang].youAreHere}</p>
              <div class="site-switcher-item__logo" aria-hidden="true">
                ${this.logos.customerPortal}
              </div>
              <h3 class="site-switcher-item__name sr-only">Red&nbsp;Hat Customer Portal</h3>
              <p>${this.translations[this.lang].portalDescription}</p>
            </a>
          </li>
          <li class="site-switcher__list-item site-switcher__list-item--developers">
            <a href="https://developers.redhat.com?intcmp=701f20000012k6JAAQ"
              data-analytics-category="Websites" data-analytics-text="developers_redhat">
              <p class="site-switcher-item__you-are-here">${this.translations[this.lang].youAreHere}</p>
              <div class="site-switcher-item__logo" aria-hidden="true">
                ${this.logos.developers}
              </div>
              <h3 class="site-switcher-item__name sr-only">Red&nbsp;Hat Developer</h3>
              <p>${this.translations[this.lang].developersDescription}</p>
            </a>
          </li>
          <li class="site-switcher__list-item site-switcher__list-item--connect">
            <a href="https://connect.redhat.com?intcmp=7013a000003SwrTAAS" data-analytics-category="Websites"
              data-analytics-text="connect_redhat">
              <p class="site-switcher-item__you-are-here">${this.translations[this.lang].youAreHere}</p>
              <div class="site-switcher-item__logo" aria-hidden="true">
                ${this.logos.connect}
              </div>
              <h3 class="site-switcher-item__name sr-only">Red&nbsp;Hat Partner Connect</h3>
              <p>${this.translations[this.lang].connectDescription}
              </p>
            </a>
          </li>
        </ul>

        <div class="site-switcher__list site-switcher__list--secondary">
          <div class="site-switcher__secondary-section">
            <h2 id="site-switcher__heading--products">${this.translations[this.lang].productsHeading}</h2>
            <ul aria-labelledby="site-switcher__heading--products">
              <li>
                <a href="https://www.ansible.com?intcmp=701f20000012k6TAAQ"
                  data-analytics-category="Websites" data-analytics-text="ansible">
                  <h3>Ansible.com</h3>
                </a>
                ${this.translations[this.lang].ansibleDescription}
              </li>
              <li>
                <a href="https://catalog.redhat.com?intcmp=7013a000003SwrYAAS"
                  data-analytics-category="Websites" data-analytics-text="catalog">
                  <h3>Red&nbsp;Hat Ecosystem Catalog</h3>
                </a>
                ${this.translations[this.lang].ecosystemDescription}
              </li>
            </ul>
          </div>

          <div class="site-switcher__secondary-section">
            <h2 id="site-switcher__heading--try-buy-sell">${this.translations[this.lang].tryBuySell}</h2>
            <ul aria-labelledby="site-switcher__heading--try-buy-sell">
              <li>
                <a href="https://cloud.redhat.com?intcmp=7013a000003SwrdAAC" data-analytics-category="Websites"
                  data-analytics-text="hybrid-cloud">
                  <h3>Red&nbsp;Hat Hybrid Cloud Console</h3>
                </a>
                ${this.translations[this.lang].hybridCloudDescription}
              </li>
              <li>
                <a href="https://www.redhat.com/store?intcmp=701f20000012k6nAAA"
                  data-analytics-category="Websites" data-analytics-text="store">
                  <h3>Red&nbsp;Hat Store</h3>
                </a>
                ${this.translations[this.lang].storeDescription}
              </li>
              <li>
                <a href="https://marketplace.redhat.com/en-us?intcmp=7013a000003SwriAAC"
                  data-analytics-category="Websites"
                  data-analytics-text="marketplace">
                  <h3>Red&nbsp;Hat Marketplace</h3>
                </a>
                ${this.translations[this.lang].marketplaceDescription}
              </li>
            </ul>
          </div>

          <div class="site-switcher__secondary-section">
            <h2 id="site-switcher__heading--events">${this.translations[this.lang].eventsHeadline}</h2>
            <ul aria-labelledby="site-switcher__heading--try-buy-sell">
              <li>
                <a href="https://www.redhat.com/summit?intcmp=701f20000012k6xAAA"
                  data-analytics-category="Websites" data-analytics-text="summit">
                  <h3>${this.translations[this.lang].summitTitle}</h3>
                </a>
                ${this.translations[this.lang].summitDescription}
              </li>
            </ul>
          </div>
        </div>
      </div>`;

    // Replace light DOM HTML in the component
    this.innerHTML = contentHtml;

    // If it hasn't been done already, remove scope attribute on the styles
    if (this.styles.hasAttribute('scope')) {
      this.styles.removeAttribute('scope');
    }
    // Make sure they're in the light DOM, they'll start in the shadowRoot
    this.append(this.styles);

    // Update you are here, but only if page has been loaded
    if (!this.site) {
      if (document.readyState === 'complete') {
        this.renderYouAreHere();
      }
      else {
        window.addEventListener('load', () => this.renderYouAreHere());
      }
    }
  }

  siteChanged(oldSite, newSite) {
    if (oldSite !== newSite) {
      this.renderYouAreHere(newSite);
    }
  }

  /**
   * Ensure that lang is set to a value we can work with
   */
  validateLang() {
    let langSet = false;
    const availableLangs = Object.keys(this.translations);
    if (typeof this._lang === 'string') {
      this.lang = this._lang.toLowerCase();
      // Make sure lang is valid
      if (availableLangs.indexOf(this.lang) >= 0) {
        langSet = true;
      }
    }

    if (!langSet) {
      console.warn('site-switcher: Didn\'t know what language to use, defaulting to english. Language set to:', this.lang, 'Available languages:', availableLangs);
      this.lang = 'en';
    }
  }

  /**
   * React to lang changing
   * @param {string} oldLang Previous value
   * @param {string} newLang New value
   */
  _langChanged(oldLang, newLang) {
    if (newLang !== oldLang) {
      this.validateLang();

      if (this.lang !== oldLang) {
        this.renderSiteSwitcherHtml();
        this.renderYouAreHere();
      }
    }
  }
}

PFElement.create(SiteSwitcher);

export default SiteSwitcher;
//# sourceMappingURL=./site-switcher.js.map
