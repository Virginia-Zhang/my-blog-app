/**
 * @file like-button.test.tsx
 * @description Component tests for LikeButton interactive button with state management and localStorage persistence.
 * @description いいねボタンコンポーネントのテスト。ステート管理と localStorage 永続化をテスト。
 * @author Virginia Zhang
 * @remarks Uses @testing-library/react for component rendering and @testing-library/user-event for simulating user interactions.
 * @remarks @testing-library/react でコンポーネント描画、@testing-library/user-event でユーザーインタラクション実行。
 */

import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "@/app/components/like-button";

describe("LikeButton Component", () => {
  const mockPostId = "test-post-1";
  const mockInitialLikes = 10;

  /**
   * @description Clear localStorage before each test to ensure test isolation.
   * @description テスト分離を保証するために各テストの前に localStorage をクリア。
   */
  beforeEach(() => {
    localStorage.clear();
  });

  /**
   * @description Clean up localStorage after each test.
   * @description 各テスト後に localStorage をクリーンアップ。
   */
  afterEach(() => {
    localStorage.clear();
  });

  test("renders with initial likes count", () => {
    render(<LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />);

    // Find the button by its role and check for the likes count
    // ボタンをロールで検索して、いいね数をチェック
    const likeButton = screen.getByRole("button");
    expect(likeButton).toBeDefined();
    expect(likeButton.textContent).toContain("10");
  });

  test("increments likes when clicked", async () => {
    const user = userEvent.setup();
    render(<LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />);

    const likeButton = screen.getByRole("button");

    // Initial state
    // 初期状態
    expect(likeButton.textContent).toContain("10");
    expect(likeButton).not.toHaveProperty("disabled", true);

    // Click the button
    // ボタンをクリック
    await user.click(likeButton);

    // After click
    // クリック後
    await waitFor(() => {
      expect(likeButton.textContent).toContain("11");
    });
  });

  test("disables button and shows 'Thanks!' after click", async () => {
    const user = userEvent.setup();
    render(<LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />);

    const likeButton = screen.getByRole("button");

    // Initially not disabled
    // 初期状態では無効化されていない
    expect(likeButton).not.toHaveProperty("disabled", true);

    // Click the button
    // ボタンをクリック
    await user.click(likeButton);

    // After click: button should be disabled and show "Thanks!"
    // クリック後：ボタンが無効化され、「Thanks!」が表示される
    await waitFor(() => {
      expect(likeButton).toHaveProperty("disabled", true);
      expect(screen.getByText("Thanks!")).toBeDefined();
    });
  });

  test("saves and loads likes from localStorage", async () => {
    const user = userEvent.setup();
    const { unmount } = render(
      <LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />
    );

    const likeButton = screen.getByRole("button");

    // Click to increment
    // クリックしていいね数を増加
    await user.click(likeButton);

    await waitFor(() => {
      expect(likeButton.textContent).toContain("11");
    });

    // Verify localStorage was updated
    // localStorage が更新されたことを確認
    const storedLikes = localStorage.getItem(`likes-${mockPostId}`);
    expect(storedLikes).toBe("11");

    // Unmount and remount
    // アンマウントして再マウント
    unmount();

    // Re-render with same props
    // 同じ props で再レンダリング
    render(<LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />);

    // After hydration, the component should load from localStorage
    // ハイドレーション後、コンポーネントは localStorage から読み込む必要がある
    // Note: This uses waitFor because useEffect runs after render
    // 注：useEffect はレンダリング後に実行されるため waitFor を使用
    await waitFor(() => {
      const newButton = screen.getByRole("button");
      expect(newButton.textContent).toContain("11");
      expect(newButton).toHaveProperty("disabled", true);
      expect(screen.getByText("Thanks!")).toBeDefined();
    });
  });

  test("prevents duplicate likes from the same user", async () => {
    const user = userEvent.setup();
    render(<LikeButton postId={mockPostId} initialLikes={mockInitialLikes} />);

    const likeButton = screen.getByRole("button");

    // Click once
    // 一度クリック
    await user.click(likeButton);

    await waitFor(() => {
      expect(likeButton.textContent).toContain("11");
      expect(likeButton).toHaveProperty("disabled", true);
    });

    // Try to click again (should not work because button is disabled)
    // 再度クリック試行（ボタンが無効化されているため動作しない）
    await user.click(likeButton);

    // Likes should still be 11
    // いいね数は 11 のまま
    await waitFor(() => {
      expect(likeButton.textContent).toContain("11");
    });
  });

  test("handles multiple different posts independently", async () => {
    const user = userEvent.setup();
    const post1 = "post-1";
    const post2 = "post-2";

    // Render first post
    // 最初の投稿をレンダリング
    const { unmount } = render(<LikeButton postId={post1} initialLikes={5} />);

    const button1 = screen.getByRole("button");
    await user.click(button1);

    await waitFor(() => {
      expect(button1.textContent).toContain("6");
    });

    // Verify post1 data is saved
    // post1 のデータが保存されていることを確認
    expect(localStorage.getItem(`likes-${post1}`)).toBe("6");

    // Unmount first component and render second post
    // 最初のコンポーネントをアンマウントして2番目の投稿をレンダリング
    unmount();
    render(<LikeButton postId={post2} initialLikes={20} />);

    // Check second post has independent state
    // 2番目の投稿が独立した状態を持つことを確認
    const button2 = screen.getByRole("button");
    expect(button2.textContent).toContain("20");
    expect(button2).not.toHaveProperty("disabled", true);

    // Verify both localStorage entries exist independently
    // 両方の localStorage エントリが独立して存在することを確認
    expect(localStorage.getItem(`likes-${post1}`)).toBe("6");
    expect(localStorage.getItem(`likes-${post2}`)).toBeNull(); // post2 not clicked yet
  });
});
