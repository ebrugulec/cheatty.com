import type { NextPage } from "next";
import { useRouter } from "next/router";

const CheatsheetDetail: NextPage = () => {
  const { query } = useRouter();

  return (
    <div>
      Cheatsheet <b>{query.slug}</b> Page!
    </div>
  );
};

export default CheatsheetDetail;
