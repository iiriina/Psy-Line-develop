import DiaryEntry from "../../components/DiaryEntry"
import Menu from "../../components/Menu"
import NavigationBar from "../../components/NavigationBar"


const DiaryEntryPage = () => {
  return (
    <div>
        <Menu />
        <NavigationBar showButton='true' />
        <DiaryEntry />
    </div>
  )
}

export default DiaryEntryPage