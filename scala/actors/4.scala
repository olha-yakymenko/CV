import org.apache.pekko.actor.{Actor, ActorRef, Props, ActorSystem}

case object Piłeczka4
case class Graj04(nastepny: ActorRef, rola: String)

class Gracz04 extends Actor {
  var nastepny: ActorRef = _
  var rola: String = _

  def receive: Receive = {
    case Graj04(nowyNastepny, nowaRola) =>
      nastepny = nowyNastepny
      rola = nowaRola
      if (self.path.name == "gracz01") {
        println(s"${self.path.name}: $rola!")
        nastepny ! Piłeczka4
      }
    case Piłeczka4 =>
      println(s"${self.path.name}: $rola!")
      nastepny ! Piłeczka4
  }
}

@main
def zad4: Unit = {
  val system = ActorSystem("PingPongSystem")
  
  // Tworzenie graczy
  val liczbaGraczy = 5  // Zmienna określająca liczbę graczy
  val roles = List("Ping", "Pong", "Pang", "Pung")  // Lista ról

  val gracze = (1 to liczbaGraczy).map { i =>
    val gracz = system.actorOf(Props[Gracz04](), name = s"gracz${"%02d".format(i)}")
    val rola = if (i <= roles.size) roles(i - 1) else s"Gracz$i"
    (gracz, rola)
  }

  // Inicjacja graczy
  gracze.zipWithIndex.foreach { case ((gracz, rola), i) =>
    val nastepnyGracz = gracze((i + 1) % liczbaGraczy)._1
    gracz ! Graj04(nastepnyGracz, rola)
  }
}
