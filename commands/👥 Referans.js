/*CMD
  command: ð¥ Referans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{title: "Ref Linkiniz ð",command: "reflink"}],[{title: "En Ä°yi Refler ð", command: "topref"}],[{title: "Reflerim ð", command: "reflerim"}]
];
Bot.sendInlineKeyboard(button,"Selam "+user.first_name+" \n Referans Menusuna HoÅ Geldin ")
