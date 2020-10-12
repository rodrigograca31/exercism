class Node<T> {
  value: T;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor(value: T, prev: Node<T> | null, next: Node<T> | null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  delete = (): void => {
    if (this.prev) {
      this.prev.next = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    }
  };
}

class LinkedList<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _size = 0;

  constructor(node?: Node<T>) {
    if (node) {
      this._head = node;
      this._tail = node;
    }
  }

  // remove_from_tail
  pop = (): T | undefined => {
    const value = this._tail?.value;
    this._delete(this._tail);
    return value;
  };

  // add_to_tail
  push = (value: T): number => {
    const node = new Node<T>(value, this._tail, null);

    this._size += 1;

    if (this._tail) {
      this._tail.next = node;
      this._tail = node;
    } else {
      // this is from when the LinkedList is new and doesnt have a tail or head yet
      this._tail = node;
      this._head = node;
    }

    return this._size;
  };

  // remove_from_head
  shift = (): T | undefined => {
    const value = this._head?.value;
    this._delete(this._head);
    return value;
  };

  // add_to_head
  unshift = (value: T): number => {
    const node = new Node<T>(value, null, this._head);

    this._size += 1;

    if (this._head) {
      this._head.prev = node;
      this._head = node;
    } else {
      // this is from when the LinkedList is new and doesnt have a tail or head yet
      this._tail = node;
      this._head = node;
    }

    return this._size;
  };

  count = (): number => this._size;

  private _delete = (node: Node<T> | null): void => {
    this._size -= 1;
    if ((!this._head && !this._tail) || !node) {
      return;
    } else if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    } else if (this._head === node) {
      this._head = node.next;
      node.delete();
    } else if (this._tail === node) {
      this._tail = node.prev;
      node.delete();
    } else {
      node.delete();
    }
  };

  delete = (value: T): void => {
    let currentNode = this._head;
    while (currentNode) {
      if (currentNode.value === value) {
        this._delete(currentNode);
        break;
      }

      currentNode = currentNode.next;
    }
  };
}

export default LinkedList;

// console.log(new LinkedList());
