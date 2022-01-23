import React from 'react';
import { observer } from 'mobx-react';
import { FlexView } from '../../styles/global.styles';



const Home = observer(() => {
    return (<FlexView>
        {"Electron & React & Mobx"}
    </FlexView>);
});

export default Home;