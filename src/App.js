import Counter from './2.counter';
import Helloworld from './1.helloworld';
import Userinput from './3.userInput';
import DisplayList from './4.displayList';
import ToggleSwitch from './5.toggleSwitch';
import FetchApiData from './6.fetchApiData';
import Timer from './7.timer';
import BgColorChange from './8.bgColorChange';
import Routers from './9.router';
import './App.css';
import RandomQuote from './10.randomQuote';
import UploadImage from './11.uploadImage';
import WeatherApi from './12.weatherApi';
import SearchItems from './13.searchItems';
import Pagination from './14.pagination'
import ColorPicker from './15.colorPicker';
import ResponsiveMenu from './16.responsiveMenu';
import DarkLightTheme from './darkLightTheme';
import ShoppingCart from './18.shoppingCart';
import { CartProvider } from './shoppingCartContext';
import CounterUsingReducer from './19.counterUsingReducer';
import TodoListUsingReducer from './20.todoListUsingReducer';
import PaginationUsingReducer from './21.paginationUsingReducer';
import UserAuthUsingUseContext from './22.userAuthUsingUseContext';
import { AuthProvider } from './22.authContext';
import DraggableComponentUsingReducer from './23.draggableComponentUsingReducer';
import TransalationAppUseContext from './24.transalationAppUseContext';
import { LocalizationProvider } from './24.localizationContext';
import FetchMultipleApi from './25.fetchMultipleApi';
import MultipleStatesInSingleState from './26.multipleStates';

export default function App() {
  const items = ['Gulabjam', 'Barfi', 'Rasgulla', 'Aamras', 'Kajukatli', 'Motichur', 'Pedha', 'Sugar']
  const lst = ['Gulabjam', 'Barfi', 'Rasgulla', 'Aamras', 'Kajukatli', 'Motichur', 'Pedha', 'Sugar', 'Bakarwadi', 'Dry Fruits Barfi', 'Sweet Malai']
  return (
    <div>
      <Helloworld />
      <Counter />
      <Userinput />
      <DisplayList />
      <ToggleSwitch />
      <FetchApiData />
      <Timer />
      <BgColorChange />
      <Routers />
      <RandomQuote />
      <UploadImage />
      <WeatherApi />
      <SearchItems items={items} />
      <Pagination lst={lst} itemsPerPage={2} />
      <ColorPicker />
      <ResponsiveMenu />
      <DarkLightTheme />
      <CartProvider>
        <ShoppingCart />
      </CartProvider>
      <CounterUsingReducer/>
      <TodoListUsingReducer/>
      <PaginationUsingReducer/>
      <AuthProvider>
        <UserAuthUsingUseContext/>
      </AuthProvider>
      <DraggableComponentUsingReducer/>
      <LocalizationProvider>
        <TransalationAppUseContext/>
      </LocalizationProvider>
      <FetchMultipleApi/>
      <MultipleStatesInSingleState/>
    </div>
  )
}
