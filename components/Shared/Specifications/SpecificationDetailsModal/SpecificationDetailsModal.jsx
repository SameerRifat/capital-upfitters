import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import css from './specificationDetailsModal.module.scss'
import cx from 'classnames'
import './customStyles.css'
import { Icon } from '@iconify/react';
import { PortableText } from '@portabletext/react'
import Image from 'next/image';
import { urlFor } from '@/lib/client';

const SpecificationDetailsModal = ({ open, setOpen, item }) => {
    const closeIcon = (
        <Icon
            icon="material-symbols:close"
            color='#ffffff'
            width={25}
        />
    );
    return (
        <Modal open={open} onClose={() => setOpen(false)} center
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                closeButton: 'customButton',
            }}
            closeIcon={closeIcon}
        >

            <div className={css.specification_modal}>
                <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                    {item?.title} Specifications
                </h3>
                <div className={css.modal_content}>
                    <div className={css.content_left}>
                        <div className={cx("portableTextWrapper")}>
                            <PortableText value={item?.detail} />
                        </div>
                    </div>
                    <div className={css.content_right}>
                        {item && (
                            <Image
                                src={urlFor(item?.image).url()}
                                alt='image'
                                width={400}
                                height={400}
                                priority
                                quality={100}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default SpecificationDetailsModal