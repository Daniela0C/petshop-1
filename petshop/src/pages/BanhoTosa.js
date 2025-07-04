import CallToAction from "../components/CallToAction";
import ContentImgLeft from "../components/ContentImgLeft"
import ContentImgRight from "../components/ContentImgRight";
import Rotulo from "../components/Rotulo"
import banhotosa from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg";
import vacina from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg"


function BanhoTosa(){
    return(
        <div>
            <Rotulo rotulo='Banho e Tosa'/>
            <ContentImgLeft imagem={banhotosa} textoImagem='cachorro no banho' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Etiam leo lectus, vestibulum at interdum sed, ullamcorper non velit. In mattis, orci eu fringilla porttitor, dui diam vehicula 
             quam, id rhoncus nisi augue in nulla. Donec viverra placerat rhoncus. Nullam varius ligula vel viverra posuere. Ut blandit efficitur
             lectus, vel mollis augue pellentesque sed. Sed quis volutpat arcu. Pellentesque feugiat sapien eu massa cursus ultricies. Mauris 
             malesuada sem ac justo rhoncus tempor. Suspendisse commodo in nunc vel ultricies. Proin vitae lorem erat. Mauris aliquam tellus at 
             dapibus fermentum. Nam pellentesque turpis sem, vel elementum libero fermentum vitae.'/>

            <CallToAction texto='PET CARE'/>

            <ContentImgRight imagem={vacina} textoImagem='cachorro vacinado' texto='Donec feugiat eros ac aliquet dapibus. Nullam nisl augue,
             interdum in convallis non, accumsan eu massa. Ut suscipit orci urna, vel cursus turpis mattis vel. Integer at dapibus dolor. Quisque 
             iaculis, nunc et mollis gravida, dui erat dapibus ex, et sagittis purus urna a odio. Maecenas quis nisl turpis. Nullam condimentum urna 
             et urna efficitur posuere. Aliquam tincidunt quam felis, vitae mattis nibh vulputate ut. Etiam nec ex mattis risus dignissim mollis 
             eu sed neque. Praesent sollicitudin placerat congue. Sed magna augue, eleifend non lorem ac, tristique viverra nibh. In nec leo nec tellus 
             dictum posuere.'/>
        </div>
    )
}

export default BanhoTosa