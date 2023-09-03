import Footer from "./Component/Footer";
import ForBody from "./Component/ForBody";
import ForHome from "./Component/ForHome";
import ForSkin from "./Component/ForSkin";
import Header from "./Component/Header";
import PostPoo from "./Component/PostPoo";
import Quote from "./Component/Quote";
import StoreLocator from "./Component/StoreLocator";
import WarmUp from "./Component/WarmUp";


const App = () => {
  return (
    <div>
      <Header></Header>
      <ForBody></ForBody>
      <WarmUp></WarmUp>
      <ForSkin></ForSkin>
      <PostPoo></PostPoo>
      <ForHome></ForHome>
      <StoreLocator></StoreLocator>
      <Quote></Quote>
      <Footer></Footer>

    </div>
  );
};

export default App;