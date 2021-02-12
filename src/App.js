import React from 'react';
import Utama from './Component/utama';
import {Link} from 'react-router-dom';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import './App.css';
import background from './images/egg.jpg';

class App extends React.Component{
  render(){
    return(
      <div>
      <Layout style={{background: `url(${background}) center / cover`}}>

        <Header transparent title="Risa" style ={{color: 'white'}}>
            <Navigation style= {{color:'white'}}>
            <Link to = "/">Beranda</Link>
            <Link to = "/tentangsaya"> Tentang Saya</Link>
            <Link to = "/karya">Karya</Link>
            <Link to = "/kontak">Kontak</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to = "/">Beranda</Link>
            <Link to = "/tentangSaya"> Tentang Saya</Link>
            <Link to = "/karya">Karya</Link>
            <Link to = "/kontak">Kontak</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
                  <Utama />
        <div class="container">
          <br/><br/>
          <center><h4>"[ for yourself ]"</h4></center>
          <blockquote class="blockquote text-center">
			<p>Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka mendengarnya jika orang lain mengucapkannya kepadamu.</p>
			<footer class="blockquote-footer bold">Ali Bin Abi Thalib</footer>
		</blockquote>
        </div>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;