import { users } from 'public/data/order/user'
import { prices } from 'public/data/order/price'
import styles from '@/styles/components/merchant/homepage/order.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Order() {

    return (
        <>
        <div className={styles.container}> 
            <div className="title">
                <h4>ORDERS</h4>
            </div>

            <div className="body">
                {users.map((user) => (
                    <div className={styles.konten} key={user.id}>
                        <div className={styles.user}>
                            <h5>{user.id}</h5>
                            <h5>{user.nama}</h5>
                            <p>{user.alamat}</p>
                        </div>

                        <div className="price mt-3">
                            <ul className='px-0'>
                                {prices.filter(item => item.id === user.id).map(item =>
                                <li key={item.id} className="d-flex justifiy-content-between px-0">
                                    <p>{item.pesanan}</p>
                                    <p className='ms-2'>{item.harga}</p>
                                </li> 
                                )}
                                <li className="d-flex justify-content-between px-0">
                                    <h5>Total</h5>
                                    <h5 className='ms-2'>
                                    {prices.filter(item => item.id === user.id).reduce((total, item) => 
                                    total + parseInt(item.harga), 0)}
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}