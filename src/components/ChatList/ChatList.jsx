import React, { useEffect } from "react";

const getChatsUrl = `https://api.green-api.com/waInstance1101821105/getContacts/2d6fedf9ad534d4ca851e62e32e457ea07b68b320a764fdb9b`;

const ChatList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getChatsUrl);
      const data = await res.json();
      console.log(data);
    };

    fetchData().catch(console.error);
  }, []);

  return <div>ChatList</div>;
};

export default ChatList;
