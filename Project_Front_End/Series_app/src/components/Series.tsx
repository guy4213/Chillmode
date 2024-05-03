import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Series(props:any) {
    const [categories, setCategories] = useState(props.categories);
    const [isCategoryExist, setCategoryExist] = useState(false);
    const nav=useNavigate();    
    useEffect(() => {
        // Update categories state whenever props.categories changes
        setCategories(props.categories);
        checkCategoryExistence();
    }, [props.categories]);

    const checkCategoryExistence = () => {
        // Ensure categories is an array before using forEach
        if (Array.isArray(categories)) {
            categories.forEach(category => {
                if (category.name === props.categoryname) {
                    setCategoryExist(true);
                }
            });
        }
    };

function goToDetails(){
    console.log(props.img)
 
    const seriesProps:any= {
       
        id:props.id,
        seriesName: props.seriesName,
        averageRate:props.averageRate,
        img: props.img,
        trailer:props.trailer,
        publishedYear: props.publishedYear,
        numberOfEpisodes: props.numberOfEpisodes,
        seriesDescription: props.seriesDescription,
        categories: props.categories,
        categoryName: props.categoryName, // Corrected from categoryname to categoryName
        actors: props.actors !== null ? props.actors : "",
        director: props.director !== null ? props.director : "",
        // Corrected from SeriesDetails to seriesDetails
    };
  console.log(seriesProps.seriesName)
    
    nav("/seriesDetails", { state: seriesProps });
}
    return (
        <div>
            {isCategoryExist && props.seriesName.includes(props.search)&& (
                <li className="series">
                    <img
                        onDoubleClick={goToDetails}
                        src={props.img}
                        alt={props.seriesName}
                    />
                    <h2 className="text-lg "><b>{props.seriesName}</b></h2>
         
                </li>
                
            )}
        </div>
    );
}

export default Series;
