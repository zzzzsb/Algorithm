// 풀이 1
#include <iostream>
#include <stack>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  int n;
  cin >> n;

  stack<int> stack;
  for (int i = 0; i < n; i++)
  {
    string cmd;
    cin >> cmd;
    if (cmd == "push")
    {
      int num;
      cin >> num;
      stack.push(num);
    }
    else if (cmd == "pop")
    {
      if (!stack.empty())
      {
        cout << stack.top() << '\n';
        stack.pop();
      }
      else
        cout << -1 << '\n';
    }
    else if (cmd == "size")
    {
      cout << stack.size() << '\n';
    }
    else if (cmd == "empty")
    {
      cout << stack.empty() << '\n';
    }
    else if (cmd == "top")
    {
      if (!stack.empty())
        cout << stack.top() << '\n';
      else
        cout << -1 << '\n';
    }
  }
  return 0;
}

// 풀이 2
#include <iostream>

using namespace std;

int stack[10000], topIdx = -1;

void push(int n)
{
  stack[++topIdx] = n;
}

int empty()
{
  if (topIdx < 0)
    return 1;
  else
    return 0;
}

int pop()
{
  if (!empty())
  {
    return stack[topIdx--];
  }
  else
    return -1;
}

int size()
{
  if (!empty())
    return topIdx + 1;
  else
    return 0;
}

int top()
{
  if (!empty())
  {
    return stack[topIdx];
  }
  else
    return -1;
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  int n;
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    string cmd;
    cin >> cmd;
    if (cmd == "push")
    {
      int num;
      cin >> num;
      push(num);
    }
    else if (cmd == "pop")
      cout << pop() << '\n';
    else if (cmd == "size")
      cout << size() << '\n';
    else if (cmd == "empty")
      cout << empty() << '\n';
    else if (cmd == "top")
      cout << top() << '\n';
  }
  return 0;
}