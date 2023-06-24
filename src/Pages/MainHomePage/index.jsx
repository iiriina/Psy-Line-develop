import NavigationBar from "../../components/NavigationBar";
import Menu from "../../components/Menu";
import DailyPhrase from "../../components/DailyPhrase";
import Activity from "../../components/Activity";

const MainHome = () => {
    return (
      <>  
        <NavigationBar showButton='true'/>
        <Menu />
        <DailyPhrase />
        <Activity />
      </>    
    )
  }
  
export default MainHome
