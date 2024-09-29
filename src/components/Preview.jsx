import Headers from './Header';
import PreviewSideBar from './PreviewSideBar';
import { useRef } from "react";

function Preview(){
    const parallaxRef = useRef(null);

    return(
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <div className="relative bg-n-8 rounded-[1rem] flex">
                <Headers />
                <PreviewSideBar />
                <div className="w-3/4 p-15 ml-10">
                    <h2 className="text-3xl font-extrabold mb-20">Class Car</h2>

                    <hr className="border-t-2 mt-15 mb-15 border-gray-300 mb-4" />
                    <h2 className="text-3xl font-bold">Summary</h2>
                    <p className="text-xl mt-15">
                        This section can include a brief summary of the information presented in the sidebar or other relevant details.
                    </p>
                    <hr className="border-t-2 mt-15 mb-15 border-gray-300 mb-4" />

                    <h2 className="text-3xl font-bold">Variables</h2>
                    <h2 className="text-xl mt-15 inline-block bg-blue-600 text-white p-2 rounded">make</h2>
                    <p className='text-lg mt-5 leading-loose'>
                        Type:   <span className="bg-blue-900 text-white px-1 py-1 rounded">str</span> <br/>
                        Summary: The manufacturer of the car. <br/>
                        Example: my_car = Car(make="Toyota", ...)
                    </p>
                    <h2 className="text-xl mt-15 inline-block bg-blue-600 text-white p-2 rounded">model</h2>
                    <p className='text-lg mt-5 leading-loose'>
                        Type:   <span className="bg-blue-900 text-white px-1 py-1 rounded">str</span> <br/>
                        Summary: The manufacturer of the car. <br/>
                        Example: my_car = Car(make="Toyota", ...)
                    </p>
                    <hr className="border-t-2 mt-15 mb-15 border-gray-300 mb-4" />
                    

                    <h2 className="text-3xl font-bold">Functions</h2>
                    <h2 className="text-xl mt-15 inline-block bg-blue-600 text-white p-2 rounded">drive(distance)</h2>
                    <p className='text-lg mt-5 leading-loose'>
                        Parameters: <br/>
                        <span className='text-base'><span className="bg-blue-900 text-white px-1 py-1 rounded">distance</span>(int): The distance to drive in kilometers</span> <br/>
                        Summary: Drive the car for a specified distance, updating the mileage and fuel levels accordingly. <br/>
                        Raises: <br/>
                        <span className='text-base'><span className="bg-blue-900 text-white px-1 py-1 rounded">ValueError</span>: If <span className="bg-blue-900 text-white px-1 py-1 rounded">distance</span> is negative.</span>
                        <span className='text-base'><span className="bg-blue-900 text-white px-1 py-1 rounded">RuntimeError</span>: If there is not enough fuel to drive the specified distance.</span> <br/><br/>
                        Example:
                    </p>


                    <div class="flex flex-col mt-5 bg-gray-900 text-gray-200 font-mono inline-block">
                        <div class="flex items-center h-10 px-4 bg-gray-800">
                            <div class="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
                            <div class="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
                            <div class="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div class="flex-1 p-4">
                            <div class="flex">
                                <div class="mr-2 flex-1 bg-gray-800 focus:outline-none">
                                    <p>
                                        &gt; my_car = Car(make=Toyota, model="Corolla", year=2020, color="Blue") <br/>
                                        &gt; my_car.drive(50) # Drvies 50 km
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-2 mt-15 mb-15 border-gray-300 mb-4" />


                    <h2 className="text-3xl font-bold">Output:</h2>
                    <div class="flex flex-col mt-5 bg-gray-900 text-gray-200 font-mono inline-block">
                        <div class="flex items-center h-10 px-4 bg-gray-800">
                            <div class="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
                            <div class="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
                            <div class="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div class="flex-1 p-4">
                            <div class="flex">
                                <div class="mr-2 flex-1 bg-gray-800 focus:outline-none">
                                    <p>
                                        &gt; Car Details: <br/>
                                        &gt; Make: Toyota <br/>
                                        &gt; Model: Corolla <br/>
                                        &gt; Year: 2020 <br/>
                                        &gt; Color: Blue 
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-2 mt-15 mb-15 border-gray-300 mb-4" />
                </div>
            </div>
        </div>
    )
}

export default Preview