import { FC, useState } from "react";
import { ListItem } from "../api/getListData";
import { DeleteButton, ExpandButton } from "./Buttons";
import { ChevronDownIcon, ChevronUpIcon } from "./icons";
import { useStore } from "../store";

type CardProps = {
  id: ListItem["id"];
  title: ListItem["title"];
  description?: ListItem["description"];
};

export const Card: FC<CardProps> = ({id, title, description }) => {
  const {expandedCards, addExpandedCard, removeExpandedCard, addDeletedCard} = useStore();
  const [isDeleting, setIsDeleting] = useState(false);
  const isExpanded = expandedCards.has(id);

  const toggleExpand = () =>{
    if(isExpanded){
      removeExpandedCard(id);
    }else{
      addExpandedCard(id);
    }
  }

  const deleteCard = () =>{
    setIsDeleting(true); 
    setTimeout(() => {
      addDeletedCard(id); 
    }, 1000);
  }
  return (
    <div className={`border border-black px-2 py-1.5 hover:scale-105 ${isDeleting ? "animate-moveToDeleted" : ""}`}>
      <div className="flex justify-between mb-0.5">
        <h1 className="font-medium">{title}</h1>
        <div className="flex">
          <ExpandButton onClick={toggleExpand}>
            {isExpanded ? <ChevronDownIcon/> : <ChevronUpIcon />}
          </ExpandButton>
          <DeleteButton onClick={deleteCard}/>
        </div>
      </div>
      <div
        className={`overflow-hidden ${isExpanded ? "animate-slideDown" : "animate-slideUp"}`}
      >
        {isExpanded && <p className="text-sm">{description}</p>}
      </div>
      
    </div>
  );
};
