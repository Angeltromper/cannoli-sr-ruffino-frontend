import React, {useEffect, useState} from 'react';
import pageImg from '../../../src/assets/img.background/cannoli-background.png';
import YellowContentBox from "../../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import axios from "axios";
import TextContainer from "../../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";

function Compare({headerImageHandler, pageTitleHandler}) {
    const [cannoli, setCannoli] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/cannolis/")
            .then((response ) => {
                setCannoli(response.data);
            }).catch(error => {
            console.error ( 'There was an error!, error' );
        });

    }, []);

u




    }
}