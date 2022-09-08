fn main() {
    fizz_buzz(101);
    fizz_buzz_2(101);
    fizz_buzz_3(101);
}

fn fizz_buzz(n: i32) {
    let mut cnt = 0;
    while cnt <= n {
        if cnt % 15 == 0 {
            println!("FizzBuzz");
        } else if cnt % 3 == 0 {
            println!("Fizz");
        } else if cnt % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", cnt);
        }
        cnt += 1;
    }
}

fn fizz_buzz_2(end: i32) {
    for n in 1..=end {
        match n % 15 {
            n if n % 15 == 0 => println!("FizzBuzz"),
            n if n % 3 == 0 => println!("Fizz"),
            n if n % 5 == 0 => println!("Buzz"),
            _ => println!("{}", n),
        }
    }
}

fn fizz_buzz_3(end: i32) {
    for x in 1..=end {
        match x % 15 {
            0 => println!("FizzBuzz"),
            3 | 6 | 9 | 12 => println!("Fizz"),
            5 | 10 => println!("Buzz"),
            _ => println!("{}", x),
        }
    }
}

fn fizz_buzz_4(end: i32) {
    for x in 1..=end {
        match (x % 3, x % 5) {
            (0, 0) => println!("FizzBuzz"),
            (0, _) => println!("Fizz"),
            (_, 0) => println!("Buzz"),
            _ => println!("{}", x),
        }
    }
}
