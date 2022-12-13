import './StepTwo.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const StepTwo = () => {
    const [selectColor, setSelectColor] = useState('grey');
    const stepsDataObj = useSelector(state=> state.getRegisterStepsDataReducer);
    const errMsgObj = useSelector(state=> state.getErrMsgRegisterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (stepsDataObj.city) {
            setSelectColor('black');
        } else {
            setSelectColor('grey');
        }

    }, [stepsDataObj]);

    const stepsDataHandler = (targetName, data) => {
        dispatch({
            type: 'SET_REGISTER_STEPS_DATA', 
            registerStepsData: { [targetName]: data }
        });
    }

    return (
        <div className='container-step-two'>
            <div className='fname-box'>
                <label htmlFor='fname'>Nama Depan</label>
                <input 
                    type='text' 
                    name='fname' 
                    id='fname' 
                    defaultValue={stepsDataObj.fname}
                    placeholder='Nama Depan'
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            errMsgObj.setErrMsgFname('');
                        }
                        stepsDataHandler(e.target.name, e.target.value);
                    }}
                />
            </div>

            <div className='err-msg-box'>
                <span className='err-msg'>{errMsgObj.errMsgFname}</span>
            </div>

            <div className='lname-box'>
                <label htmlFor='lname'>Nama Belakang</label>
                <input 
                    type='text' 
                    name='lname' 
                    id='lname' 
                    defaultValue={stepsDataObj.lname}
                    placeholder='Nama Belakang'
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            errMsgObj.setErrMsgLname('');
                        }
                        stepsDataHandler(e.target.name, e.target.value);
                    }}
                />
            </div>

            <div className='err-msg-box'>
                <span className='err-msg'>{errMsgObj.errMsgLname}</span>
            </div>

            <div className='city-box'>
                <label htmlFor='city'>Provinsi</label>
                <select 
                    name='city'
                    id='city' 
                    defaultValue={stepsDataObj.city ? stepsDataObj.city : ''}
                    className={selectColor}
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            errMsgObj.setErrMsgCity('');
                        }
                        setSelectColor('black');
                        stepsDataHandler(e.target.name, e.target.value);
                    }}
                >
                    <option disabled hidden value=''>Pilih Provinsi</option>
                    <option value='Nanggroe Aceh Darussalam'>Nanggroe Aceh Darussalam</option>
                    <option value='Sumatera Utara'>Sumatera Utara</option>
                    <option value='Sumatera Selatan'>Sumatera Selatan</option>
                    <option value='Sumatera Barat'>Sumatera Barat</option>
                    <option value='Bengkulu'>Bengkulu</option>
                    <option value='Riau'>Riau</option>
                    <option value='Kepulauan Riau'>Kepulauan Riau</option>
                    <option value='Jambi'>Jambi</option>
                    <option value='Lampung'>Lampung</option>
                    <option value='Bangka Belitung'>Bangka Belitung</option>
                    <option value='Kalimantan Barat'>Kalimantan Barat</option>
                    <option value='Kalimantan Timur'>Kalimantan Timur</option>
                    <option value='Kalimantan Selatan'>Kalimantan Selatan</option>
                    <option value='Kalimantan Tengah'>Kalimantan Tengah</option>
                    <option value='Banten'>Banten</option>
                    <option value='DKI Jakarta'>DKI Jakarta</option>
                    <option value='Jawa Barat'>Jawa Barat</option>
                    <option value='Jawa Tengah'>Jawa Tengah</option>
                    <option value=' Jawa Timur'>Jawa Timur</option>
                    <option value='Yogyakarta'>Yogyakarta</option>             
                    <option value='NTT'>NTT</option>
                    <option value='NTB'>NTB</option>
                    <option value='Gorontalo'>Gorontalo</option>
                    <option value='Sulawesi Barat'>Sulawesi Barat</option>
                    <option value='Sulawesi Tenggara'>Sulawesi Tenggara</option>
                    <option value='Sulawesi Selatan'>Sulawesi Selatan</option>
                    <option value='Sulawesi Tengah'>Sulawesi Tengah</option>
                    <option value='Sulawesi Utara'>Sulawesi Utara</option>
                    <option value='Maluku'>Maluku</option>
                    <option value='Papua'>Papua</option>

                </select>
            </div>

            <div className='err-msg-box'>
                <span className='err-msg'>{errMsgObj.errMsgCity}</span>
            </div>

            <div className='street-box'>
                <label htmlFor='street'>Alamat</label>
                <input 
                    type='text' 
                    name='street' 
                    id='street' 
                    defaultValue={stepsDataObj.street}
                    placeholder='Alamat'
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            errMsgObj.setErrMsgStreet('');
                        }
                        stepsDataHandler(e.target.name, e.target.value);
                    }}
                />
            </div>

            <div className='err-msg-box'>
                <span className='err-msg'>{errMsgObj.errMsgStreet}</span>
            </div>
        </div>
    );
}

export default StepTwo;