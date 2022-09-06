fn main() {
    fizz_buzz(101);
    fizz_buzz_2(101);
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
    for n in 1..end {
        match n % 15 {
            n if n % 15 == 0 => println!("FizzBuzz"),
            n if n % 3 == 0 => println!("Fizz"),
            n if n % 5 == 0 => println!("Buzz"),
            _ => println!("{}", n),
        }
    }
}
