const formatExcerept = (content: string) => {
  if (content.length > 10) {
    content = content.substring(0, 350) + "...";
  }
  return content;
};

export { formatExcerept };
