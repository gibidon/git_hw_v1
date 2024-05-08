import "./App.css"
import { ConfigProvider } from "antd"
import { ANT_THEME_CONFIG } from "./constants/configTheme.ts"
import { CommonLayout } from "./components/CommonLayout"
import { Calculator } from "./components/Calculator"

function App() {
	return (
		<ConfigProvider theme={ANT_THEME_CONFIG}>
			<CommonLayout>
				<Calculator />
			</CommonLayout>
		</ConfigProvider>
	)
}

export default App
