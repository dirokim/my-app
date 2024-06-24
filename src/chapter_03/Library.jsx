import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="가나다라" numOfPage={300} />
            <Book name="안녕하세요" numOfPage={400} />
            <Book name="처음 뵙겠습니다" numOfPage={500} />
        </div>
    );
}
export default Library;