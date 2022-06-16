import './App.css';
import 'antd/dist/antd.min.css';
import {Col, Row} from 'antd';

import Profile from './components/profile';
import Content from './components/content';
import Sidebar from './components/sidebar';

function App() {
    return (
        <Row>
            <Col offset={2} span={4}>
                <Profile/>
            </Col>

            <Col span={10}>
                <Content/>
            </Col>

            <Col span={6}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default App;
