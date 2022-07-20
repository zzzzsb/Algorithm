#include <iostream>

using namespace std;

int queue[10000];
int f = 0, r = 0;

void push(int num)
{
  queue[r++] = num;
}

int empty()
{
  if (r - f == 0)
    return 1;
  else
    return 0;
}

int pop()
{
  if (!empty())
    return queue[f++];
  else
    return -1;
}

int size()
{
  return r - f;
}

int front()
{
  if (!empty())
    return queue[f];
  else
    return -1;
}

int back()
{
  if (!empty())
    return queue[r - 1];
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
    else if (cmd == "front")
      cout << front() << '\n';
    else if (cmd == "back")
      cout << back() << '\n';
  }

  return 0;
}
