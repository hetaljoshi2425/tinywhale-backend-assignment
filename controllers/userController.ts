import express from 'express';

export const stringToArray = (req: express.Request, res: express.Response) => {
  const names = req.query.names as string;
  const sortedNames = names && names.split(',').sort();

  const finalNameList =
    sortedNames &&
    sortedNames.map((item: string) => {
      const name = item.toLowerCase();
      return name.charAt(0).toUpperCase() + name.slice(1);
    });

  res.json({ data: finalNameList });
};
