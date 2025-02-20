import React from 'react'
import styles from '@/styles/Enlisted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import { faParagraph } from '@fortawesome/free-solid-svg-icons';
import { MRCTAGroup } from '@/component';

const PublishingNewComponent = ({
    subtitle,
    title,
    desc,
    bgImage,
    classes = "",
    textBG,
    txtBlK
}) => {
    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };
    return (
        <>
            <section className={`${styles.enlistedSlideWhite} ${bgImage} ${classes} `}>
                <div className='mr-container px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className={`font-30 font-primary ${txtBlK} text-white`}> {subtitle}  </h4>
                                <h2 className={`font-50 fw-500 font-primary ${txtBlK} text-white mb-3`}>{title}<br /> <span className={`${textBG}  color-white p-1 mt-2 d-block house`}> {desc}</span></h2>
                            </div>
                            <MRCTAGroup classes='justify-center mt-4' />
                        </Col>

                    </Row>
                </div>
            </section>
        </>
    )
}

export default PublishingNewComponent
