/**
 * About ページコンポーネント
 *
 * サイトの紹介ページです。
 * Server Component として実装されており、
 * Client Component である ContactButton を組み込んでいます。
 *
 * @returns {JSX.Element} About ページの JSX 要素
 */
import ContactButton from "./contact-button";

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">About ページ</h1>
      <p className="mb-4">ここは About ページです。</p>

      {/* Client Component を使用 */}
      <ContactButton />
    </div>
  );
}
