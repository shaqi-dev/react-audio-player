import {RootLayout} from "layouts";
import {Player} from "./components/player";

export const App = (): React.ReactElement => {
  return (
    <RootLayout>
        <Player />
    </RootLayout>
  );
}

