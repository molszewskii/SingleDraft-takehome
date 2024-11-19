import { FC } from "react";
import { ListItem } from "../api/getListData";
import { DeleteButton, ExpandButton } from "./Buttons";
import { ChevronDownIcon, ChevronUpIcon } from "./icons";
import { useStore } from "../store";

type CardProps = {
  id: ListItem["id"];
  title: ListItem["title"];
  description: ListItem["description"];
};

export const Card: FC<CardProps> = ({id, title, description }) => {
  const {expandedCards, addExpandedCard, removeExpandedCard, addDeletedCard} = useStore();

  const isExpanded = expandedCards.has(id);

  const toggleExpand = () =>{
    if(isExpanded){
      removeExpandedCard(id);
    }else{
      addExpandedCard(id);
    }
  }

  const deleteCard = () =>{
    addDeletedCard(id);
  }
  return (
    <div className="border border-black px-2 py-1.5">
      <div className="flex justify-between mb-0.5">
        <h1 className="font-medium">{title}</h1>
        <div className="flex">
          <ExpandButton onClick={toggleExpand}>
            {isExpanded ? <ChevronDownIcon/> : <ChevronUpIcon />}
          </ExpandButton>
          <DeleteButton onClick={deleteCard}/>
        </div>
      </div>
      {isExpanded && <p className="text-sm">{description}</p>}
      
    </div>
  );
};
