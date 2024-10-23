//1
def sumuj(l: List[Option[Double]]): Option[Double] = {
    @annotation.tailrec
    def help(l: List[Option[Double]], acc: Double): Option[Double]= l match{
        case (Some(head):: tail)=> help(tail, acc+head)
        case Nil => if (acc>0) Some(acc) else None
        case  None :: tail => help(tail, acc)
    }
    help(l, 0)
}
@main
def rez1: Unit={
    println(sumuj(List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))))
}

//2
def maksimum(l1: List[Double], l2: List[Double]): List[Double] = {
    def help(l1: List[Double], l2: List[Double], acc: List[Double]): List[Double]=(l1,l2) match{
        case (h1::t1, h2::t2) if(h1>h2) => help(t1, t2, h1::acc)
        case (h1:: t1, h2::t2) if(h2>=h1) => help(t1, t2, h2::acc)
        case (Nil, h2::t2) => help(Nil, t2, h2::acc)
        case (h1::t1, Nil) => help(t1, Nil, h1::acc)
        case (Nil, Nil) => acc.reverse
    }
    help(l1, l2,Nil )
}
@main
def rez2: Unit={
    val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)
    println(maksimum(lista1, lista2))
}


def usun[A](l: List[A], el: A): List[A] = {
    @annotation.tailrec
    def help(l: List[A], el:A, acc: List[A]): List[A]=l match{
        case head::tail if (head==el) => help(tail, el, acc)
        case head::tail if (head!=el)  => help(tail, el, head::acc)
        case Nil => acc.reverse
    }
    help( l, el, Nil)
}
@main
def rez3: Unit={
    val lista = List(2, 1, 4, 1, 3, 3, 1, 2)
    println(usun(lista, 1))
}

def divide[A](l: List[A]): (List[A], List[A]) = {
    def help(l : List[A], acc: Int, l1: List[A], l2: List[A]): (List[A], List[A])= l match{
        case (head:: tail) if (acc%2==0) => help(tail, acc+1, head::l1, l2)
        case (head::tail) if(acc%2!=0) => help(tail, acc+1, l1, head::l2)
        case Nil => (l1.reverse, l2.reverse)
    }
    help(l, 0, Nil, Nil)
}
@main
def rez4: Unit={
    val lista = List(1, 3, 5, 6, 7)
    println(divide(lista))

}


def or[A](p: Pred[A], q: Pred[A]): Pred[A] = {
    a => p(a) || q(a)
}

def not[A](p: Pred[A]): Pred[A] = {
    a => !p(a)
}

def imp[A](p: Pred[A], q: Pred[A]): Pred[A] = {
    a => !p(a) || q(a)
}