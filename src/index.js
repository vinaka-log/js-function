import "./styles.css";

const theme_colors = [
  {
    title: "darkgreen",
    color: "#006400",
    opacity: 0.5
  },
  {
    title: "tomato",
    color: "#ff6347",
    opacity: 0.7
  },
  {
    title: "navy",
    color: "#000080",
    opacity: 0.5
  }
];

const filter_selected = theme_colors.filter((theme) => theme.opacity == 0.5);
console.log(filter_selected);
/** カラーコードだけを抽出 */
const selected = theme_colors.map((theme) => ({ code: theme.color }));

/** 新しいプロパティにして抽出 */
const editThemeTitle = (before, after, arr) =>
  arr.map((item) => (item.title == before ? { ...item, title: after } : item));
const changed = editThemeTitle("navy", "darkblue", theme_colors);
console.log(changed);

/** opacity=0.5の要素のタイトルだけ抽出 */
const selected_chain = theme_colors
  .filter((theme) => theme.opacity === 0.5)
  .map((theme) => theme.title);
console.log(selected_chain);
