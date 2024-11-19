import { useEffect, useState } from "react";
import { DeletedListItem, ListItem, useGetListData } from "../api/getListData";
import { Card } from "./List";
import { Spinner } from "./Spinner";
import { useStore } from "../store";

export const Entrypoint = () => {
  const [visibleCards, setVisibleCards] = useState<ListItem[]>([]);
  const listQuery = useGetListData();
  const {deletedCards} = useStore();
  const [revealDeletedCards, setRevealDeletedCards] = useState(false);
  // TOOD
  const deletedCardsData: DeletedListItem[] = listQuery.data?.filter((item)=> deletedCards.has(item.id)).map(({id,title,isVisible})=>({id,title,isVisible})) ?? [];

  useEffect(() => {
    if (listQuery.isLoading) {
      return;
    }
    const filterVisibleCards = listQuery.data?.filter(
      (item)=> item.isVisible && !deletedCards.has(item.id)
    )
    
    setVisibleCards(filterVisibleCards ?? []);
  }, [listQuery.data, listQuery.isLoading, deletedCards]);

  if (listQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex gap-x-16">
      <div className="w-full max-w-xl">
        <h1 className="mb-1 font-medium text-lg">My Awesome List ({visibleCards.length})</h1>
        <div className="flex flex-col gap-y-3">
          {visibleCards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-between">
          <h1 className="mb-1 font-medium text-lg">Deleted Cards ({deletedCardsData.length})</h1>
          <button
            className="text-white text-sm transition-colors hover:bg-gray-800 disabled:bg-black/75 bg-black rounded px-3 py-1"
            onClick={() => setRevealDeletedCards((prev)=>!prev)}
          >
            Reveal
          </button>
        </div>
          {revealDeletedCards && (
             <div className="flex flex-col gap-y-3">
            {deletedCardsData.map((card) => (
              <Card key={card.id} id={card.id} title={card.title} />
            ))}
            </div>
          )}
      </div>
    </div>
  );
};
