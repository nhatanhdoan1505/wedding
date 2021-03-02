import React , {useEffect} from 'react';
import './Wedding.css';
import TheHeading from '../Couple/TheHeading/TheCoupleHeading';
import Heading from './Heading/Heading';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Paragraph from './Paragraph/Paragraph';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card/Card';
import { faGuitar, faGlassCheers } from '@fortawesome/free-solid-svg-icons';


function Wedding() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []);

    return (
        <div className="Wedding" data-aos='fade-left'>
            <TheHeading heading="Wedding"/>
            <div className="WeddingContainer">
                <Heading 
                    grom="Đoàn Hồng Trung" 
                    bridge="Phạm Bảo Ngọc"/>
                <Paragraph sentence="Sự có mặt của các bạn là niềm vinh dự của chúng tôi"/>
                <div className="Contain">
                    <Row>
                        <Col lg={4}>
                            <Card 
                                icon={faGuitar} 
                                color="#65d6ce"
                                title=" ĐÊM THANH NIÊN"
                                time="19 giờ 30, 15 tháng 5, 2021"
                                address="Tổ dân phố Đức Trường, Đồng Hới, Quảng Bình"/>
                        </Col>
                        <Col lg={4}>
                            <Card 
                                icon={faGlassCheers} 
                                color="#65d6ce"
                                title="LỄ THÀNH HÔN"
                                time="11 giờ 30, 15 tháng 5, 2021"
                                address="Tổ dân phố Đức Trường, Đồng Hới, Quảng Bình"/>
                        </Col>
                        <Col lg={4}>
                            <Card 
                                icon={faGuitar} 
                                color="#65d6ce"
                                title=" ĐÊM THANH NIÊN"
                                time="19 giờ 30 15 tháng 5, 2021"
                                address="Tổ dân phố Đức Trường, Đồng Hới, Quảng Bình"/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Wedding;