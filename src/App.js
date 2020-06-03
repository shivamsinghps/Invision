import React , { Fragment }from 'react';
import './App.css';

import ReadProgress from './containers/ReadingProgress/ReadingProgress'
import Layout from './containers/Layout/Layout'

const target = React.createRef();

function App() {
  return (
    <Fragment>
    <ReadProgress target={target} />
    <div className="App" ref={target}>
    <h1>In Vision</h1>
    <Layout>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna erat, aliquet ac efficitur in, tincidunt in leo. Aenean a leo dui. In facilisis sodales massa, ut interdum arcu facilisis non. Pellentesque vulputate libero aliquet nunc accumsan cursus. Mauris porttitor nulla vel risus ullamcorper, et euismod eros consectetur. Integer non accumsan augue. Ut ex nisl, vulputate in tortor quis, vehicula suscipit turpis. Praesent molestie a orci non iaculis. Donec vestibulum tellus lectus, consequat accumsan nunc sagittis eget. Aliquam mollis lectus nisl. Aliquam tempus massa augue, sit amet imperdiet dolor convallis et. Curabitur hendrerit pellentesque tellus, vitae iaculis nisl tempor sit amet.

            Vivamus venenatis tempus enim. Nam pharetra nunc ac risus congue tristique. Proin bibendum nisl egestas augue lobortis varius. Integer malesuada lectus ante, vel sollicitudin est dictum eu. Curabitur aliquet nisl id purus pulvinar, id pulvinar dui pellentesque. Aliquam molestie consectetur euismod. Etiam cursus mauris ut nunc aliquam, vel tristique ipsum euismod. Phasellus congue eu orci ut dapibus. Etiam malesuada elit in porttitor dapibus. Phasellus sit amet ornare nunc. Aliquam laoreet eros dapibus, maximus dui eu, tincidunt metus.

            Vivamus turpis diam, mattis in tellus id, feugiat sollicitudin neque. Maecenas eget est non metus rhoncus ultricies. Vestibulum eu fermentum neque. Vivamus bibendum, leo sed tempus ullamcorper, dui massa consectetur velit, eget ullamcorper quam mauris ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget tellus ut nunc ornare ultrices. Nunc iaculis suscipit lacus id vehicula. Sed fermentum interdum dignissim. Vestibulum rutrum quam diam, ac blandit libero rhoncus sit amet. Mauris mauris mauris, iaculis sit amet lacus eget, ultricies blandit augue. Donec hendrerit neque in justo tempus maximus.

            Donec scelerisque interdum maximus. Cras nisl tellus, auctor ut molestie ut, volutpat eget mauris. Sed a auctor leo. Etiam laoreet neque sit amet dolor fringilla, ut vehicula dui lobortis. In imperdiet luctus massa, et hendrerit tortor dignissim non. Phasellus ac ornare ligula. Vestibulum mattis urna id diam tempor, eu sollicitudin ligula congue. In gravida mi sollicitudin, facilisis est viverra, eleifend tortor. Donec feugiat, metus sed maximus ornare, nulla ligula rutrum enim, quis imperdiet metus sem interdum ligula. Maecenas elementum sit amet arcu ultrices pharetra. Cras elementum, ante sit amet luctus malesuada, augue dolor porta tortor, ac ultricies tellus velit ut magna. Nunc rutrum pellentesque viverra.

            Nunc aliquet et ex at viverra. Sed vel mollis orci, eu faucibus tortor. Etiam bibendum nisi justo, vel efficitur elit laoreet ut. Morbi tincidunt consectetur ligula et tincidunt. Cras vitae justo lobortis, molestie orci eget, aliquam mi. Curabitur vitae odio consequat, faucibus mauris in, fringilla enim. Aenean molestie sodales erat, a lacinia dolor. Maecenas venenatis purus mi, nec mattis nibh facilisis non.

            Maecenas placerat nisi vel eros tempus placerat. Aliquam fringilla et nunc sed consequat. Proin justo justo, dignissim et nisl a, maximus vulputate quam. Praesent ultrices ex ac purus tempus iaculis. Nam et pharetra neque, sed elementum velit. Nunc pellentesque dui eu nisi euismod, at commodo mi pellentesque. Aliquam a eros vel nibh placerat egestas quis vel arcu. In facilisis molestie magna, ut semper sem posuere ut. Quisque congue ligula lacinia justo tristique, ac auctor dolor facilisis.

            Proin facilisis leo non risus malesuada, a commodo diam eleifend. Ut vestibulum mauris in ipsum interdum consequat. Cras velit lorem, fringilla a risus vitae, aliquet tristique nibh. Phasellus ultricies lorem a placerat cursus. Aenean convallis nibh sit amet felis sodales consequat. Praesent congue fringilla rhoncus. Fusce tellus sem, porta et hendrerit quis, porta eu quam. Duis ut quam viverra, venenatis metus at, pharetra orci. Curabitur aliquam velit vitae tellus hendrerit scelerisque. Suspendisse efficitur venenatis mauris quis molestie. Proin ac erat vitae mi sodales pellentesque. Aliquam urna sem, ullamcorper iaculis dictum id, dapibus et enim. Sed dignissim sed dui eu dapibus.

            Integer purus lorem, venenatis at bibendum quis, porta ut mi. Proin finibus, dui eget egestas commodo, nunc mi tristique augue, eu porttitor massa neque sit amet turpis. Donec in mattis est. Quisque eget dolor nec leo tristique dignissim. Praesent a auctor lacus. Integer mi sem, hendrerit non lacus nec, convallis sollicitudin est. Mauris ullamcorper venenatis nisl, dignissim scelerisque mauris molestie in.

            Curabitur rhoncus gravida lobortis. Aenean imperdiet lectus at ex suscipit rhoncus. Sed a justo ornare, laoreet erat non, porttitor dolor. Duis pellentesque tempus porta. Praesent dictum vestibulum commodo. Donec eu mi tincidunt, posuere tellus in, pellentesque ipsum. Cras porta faucibus dui, in tincidunt lectus varius posuere. Suspendisse eget mauris sodales, ornare ante tristique, porttitor nisi. Cras justo nisl, volutpat at consectetur quis, dignissim in dolor. Sed in risus non ligula rutrum accumsan a et velit. Donec eu libero vel neque laoreet varius eu vel purus. Aliquam ac libero at elit egestas sollicitudin.

            Integer vulputate lectus nibh, a dignissim enim elementum non. Nulla id laoreet mi. Nulla vulputate enim a augue ultrices fringilla. Sed placerat consectetur auctor. Aliquam ac vehicula arcu. Etiam semper nunc in nisi mollis porttitor. Mauris varius justo risus, nec ultricies</h2>
    </Layout>
    </div>
    </Fragment>
  );
}

export default App;
