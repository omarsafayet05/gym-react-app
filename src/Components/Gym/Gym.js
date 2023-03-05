import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Gym.css'
import logo from '../../image/hammer.png'
import Product from '../Product/Product';

const Gym = () => {
    const notify = () => toast.success('Appreciated! You are well done.', { position: 'top-center', theme: 'colored' });
    const getTimes = localStorage.getItem("time") ? JSON.parse(localStorage.getItem("time")) : 0



    const [products, setProducts] = useState([]);
    const [time, setTime] = useState(0);
    const [breaktime, setBreaktime] = useState(getTimes);
    const breakTimes = [10, 20, 30, 40, 50];
    const addBreakHandler = item => {
        setBreaktime(item);
    }
    localStorage.setItem('time', breaktime)
    const handleAddToList = id => {
        const product = products.find((item) => item.id === id)
        if (product) {
            setTime(time + product.timeRequired);

        }
    }


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container">
            <div className='exercise-container'>


                <nav className='header'><img className='logo-size' src={logo} alt="" />
                    <h2>Select today's Exercise</h2></nav>

                <div className='products-container'>


                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToList={handleAddToList}></Product>)
                    }
                </div>

                <div className='askedQuestion-container'>
                    <div className='faq-style'>
                        <h4>#1. What is React and how its work?</h4>
                        <p className='text-style'>React is declarative,efficient,and flexible Javascript library for building user interfaces,it lets you compose complex UIs from small and isolated pieces of code called "Components".React has a few different kinds of components,but we'll start with React.Component subclasses:classShoppingList extends React.</p>

                        <h4>#2. What are differences between Props and State?</h4>
                        <p className='text-style'>Props is passed from one component to another.State is passed within the component only. Props is Immutable whereas State is mutable.Props can be used with state and functional components.State can be used only with the state components/class component.
                            Props are read only.State is both read and write</p>

                        <h4>#3. Where useEffect uses?</h4>
                        <p className='text-style'>The useEffect Hook always you to perform side effects in your components.Some examples are:fetching data,directly updating the Dom,and timers</p>
                    </div>
                </div>

            </div>
            <div className='sidebar-container'>

                <div className='personal-info'>

                    <p>Name:Md.Omar Safayet Khan</p>
                    <p>Location:<span className='greyColor'>Chittagong</span></p>
                    <p>Weight:<span className='greyColor'>70.5 Kg</span></p>
                    <p>Height:<span className='greyColor'>5.5 inch</span></p>
                    <p>Age:<span className='greyColor'>33 yrs</span></p>

                </div>
                <div className='add-a-break'>
                    {
                        breakTimes.map((item) => <button key={item} className="btn-style" onClick={() => addBreakHandler(item)}>{item}</button>)
                    }
                </div>
                <h3>Exercise Details</h3>
                <div className='exercise-details'>
                    <p> Exercise Time: <span className='grayColor'>{time} seconds</span></p>

                </div>
                <h3>Add A Breaktime</h3>
                <div className='Add-to-break'> <p>Breaktime: <span className='grayColor'> {breaktime} seconds</span></p></div>
                <div className='toast-btn'>
                    <div >
                        <button onClick={notify} className='toast-style'>Activity Completed</button>
                        <ToastContainer />
                    </div>


                </div>

            </div>

        </div >
    );
};

export default Gym;